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
import Overview from './components/Overview.jsx';
import Images from './components/Images.jsx';
import ProductInfo from './components/ProductInfo.jsx';
import Modal from './components/Modal.jsx';
import ThumbnailCarousel from './components/ThumbnailCarousel.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import Button from './components/Button.jsx';

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

describe.only('Overview Widget', () => {
  it('Overview should render', async () => {
    const overview = await screen.findByRole('heading', { name: /overview/i });
    expect(overview).toBeInTheDocument();
    expect(overview).toHaveTextContent('Product Overview Widget');
  })

  // TODO: figure out why full size image only renders sometimes
  it('Full size product image should render', async () => {
    // const largeImage = await screen.findByRole('img', { name: /full size image/i });
    const largeImage = await screen.findByAltText(/full size image/i);
    expect(largeImage).toBeInTheDocument();
  })

  it('Product Details should render', async () => {
    const productInfo = await screen.findByRole('heading', { name: /ProductInfo Component/i });
    expect(productInfo).toBeInTheDocument();
    expect(productInfo).toHaveTextContent('ProductInfo Component');
  })

  it('Modal should exist', async () => {
    const modal = await screen.findByRole('img', { name: /modal/i });
    expect(modal).toBeInTheDocument();
  })

  it('Carousel should render', async () => {
    const carousel = await screen.findByRole('img', { name: /carousel/i })
    expect(carousel).toBeInTheDocument();
  })

  it('Style Selector should render', async () => {
    const styleSelector = await screen.findByRole('heading', { name: /Style Selector/i })
    expect(styleSelector).toBeInTheDocument();
    expect(styleSelector).toHaveTextContent('Style Selector')
  })

  it('Add to Bag Button should render', async () => {
    const addToBag = await screen.findByRole('button', { name: /\+ Add to Bag/i })
    expect(addToBag).toBeInTheDocument();
    expect(addToBag).toHaveTextContent('+ Add to Bag');
  })
});
