/**
 * @jest-environment jsdom
 */
require('dotenv').config()
import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

// Import Components
import Button from './components/Button.jsx';
import Images from './components/Images.jsx';
import Modal from './components/Modal.jsx';
import Overview from './components/Overview.jsx';
import ProductInfo from './components/ProductInfo.jsx';
import StarRating from './components/StarRating.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import ThumbnailCarousel from './components/ThumbnailCarousel.jsx';
import Thumbnail from './components/Thumbnail.jsx';

// ==================================
//    ⬇ ⭐ TESTING THE TESTS ⭐ ⬇
// ==================================
describe('Testing Environment', () => {
  it('uses jsdom', () => {
    const overview = document.createElement('div');
    expect(overview).not.toBeNull();
  });

  it('uses jest-dom', function() {
    document.body.innerHTML = `
      <span data-testid="not-empty"><span data-testid="empty"></span></span>
      <div data-testid="visible">Visible Example</div>
    `

    expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()
    expect(screen.getByText('Visible Example')).toBeVisible()
  });
});

// Check Access To Env Vars
describe('ENV Variables', () => {
  test('Receives process.env variables', () => {
    expect(process.env.API_URL).toBe('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp');
  });
});

// ==================================
//     ⬇ ⭐ TESTING SERVER ⭐ ⬇
// ==================================
// https://testing-library.com/docs/react-testing-library/example-intro
describe('Server', () => {
  const server = setupServer(
    rest.get('/*', (req, res, ctx) => {
      return res(
        ctx.json({ message: 'Loaded' }),
        ctx.status(200)
      )
    }),
  )

  beforeAll(() => server.listen({ onUnhandledRequest: "bypass" })) // remove this to see unhandled requests
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('handles server error', async () => {
    server.use(
      // override the initial "GET /" request handler
      // to return a 500 Server Error
      rest.get('/*', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    // Assert something TODO
  });
});

// ==================================
//      ⬇ ⭐ UNIT TESTS ⭐ ⬇
//      Arrange, Assert, Act
// ==================================

// Testing Setup
beforeEach(() => render(<Overview />));

describe('Overview Headings', () => {
  it('Overview should render', async () => {
    const overview = await screen.findByRole('heading', { name: /overview/i });
    expect(overview).toBeInTheDocument();
    expect(overview).toHaveTextContent('Product Overview Widget');
  })

  it('Product Details should render', async () => {
    const productInfo = await screen.findByRole('heading', { name: /ProductInfo Component/i });
    expect(productInfo).toBeInTheDocument();
    expect(productInfo).toHaveTextContent('ProductInfo Component');
  })
});

describe('Overview Style Selector (Form)', function() {
  it('Style Selector should render', async () => {
    const styleSelector = await screen.findByRole('heading', { name: /Style Selector/i });
    expect(styleSelector).toBeInTheDocument();
    expect(styleSelector).toHaveTextContent('Style Selector')
  })

  // Style Selector To-Dos:
  // Check values in drop-downs (Size, Quantity)
  it('should have a list of sizes S-2XL to choose from', async () => {
    const sizes = await screen.findAllByRole('option', { name: /size-option/i });
    // const elem = await screen.findAllByRole('listbox', { name: "sizes" });

    // TODO: Figure out why map over sizes doesn't work here
    const values = [];
    sizes.forEach(size => {
      values.push(size.value)
      expect(size).toBeInTheDocument();
    });
    expect(sizes.length).toBe(5);
    expect(values.length).toBe(5);
    expect(values).toEqual(['S', 'M', 'L', 'XL', '2XL']);
  });

  it('should have a list of quantities to choose from', async () => {
    const quantities = await screen.findAllByRole('option', { name: /qty-option/i });
    expect(quantities.length).toBe(10);
  });
});

// DEBUG TODO: Figure out why images only render sometimes
describe('Overview Images', function() {
  it('Large Image should render', async () => {
    const largeImage = await screen.findByRole('img', { name: /images/i });
    expect(largeImage).toBeInTheDocument();

    const largeImageByAlt = await screen.findByAltText(/images/i);
    expect(largeImageByAlt).toBeInTheDocument();
  })

  it('Modal should exist', async () => {
    const modal = await screen.findByRole('img', { name: /modal/i });
    expect(modal).toBeInTheDocument();
  })

  it('Carousel should render', async () => {
    const carousel = await screen.findByRole('img', { name: /carousel/i })
    expect(carousel).toBeInTheDocument();
  })
});

describe('Overview Buttons', function() {
  it('Add To Bag button should render', async () => {
    const addToBag = await screen.findByRole('button', { name: /\+ Add to Bag/i });
    expect(addToBag).toBeInTheDocument();
    expect(addToBag).toHaveTextContent('+ Add to Bag');
  })

  it('Star Toggle should render', async () => {
    const starToggle = await screen.findByRole('button', { name: /⭐/i });
    expect(starToggle).toBeInTheDocument();
    expect(starToggle).toHaveTextContent('⭐');
  })
});