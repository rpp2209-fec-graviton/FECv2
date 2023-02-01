/** @jest-environment jsdom */
require('dotenv').config()
import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { logRoles } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

// =============================================
//          Component & State Imports
// =============================================

// Components
import Button from './components/Button.jsx';
import Images from './components/Images.jsx';
import Modal from './components/Modal.jsx';
import Overview from './components/Overview.jsx';
import ProductInfo from './components/ProductInfo.jsx';
import StarRating from './components/StarRating.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import ThumbnailCarousel from './components/ThumbnailCarousel.jsx';
import Thumbnail from './components/Thumbnail.jsx';

// Context
import ContextProvider from "../Context/ContextProvider.jsx";
import OverviewProvider from "./Context/OverviewProvider.jsx";

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
//  ⬇ ⭐ TESTING REACT CONTEXT ⭐ ⬇
// ==================================
// https://testing-library.com/docs/example-react-context/

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
// describe('Context API', () => {
//   it('Overview Consumer has access to Overview Context', async () => {
//     render(
//     <ContextProvider>
//       <OverviewProvider>
//         <Overview />
//       </OverviewProvider>
//     </ContextProvider>);

//     // TO-DO: Test context variables are available instead of
//     // checking for this text content ⬇ ⬇ ⬇
//     const overview = await screen.findByText(/^Read all reviews/);
//     expect(overview).toHaveTextContent('Read all reviews');
//   });
// });


// ==================================
//      ⬇ ⭐ UNIT TESTS ⭐ ⬇
//      Arrange, Assert, Act
// ==================================
describe('Overview Widget', () => {
  // ==================================
  //          Testing Setup
  // ==================================
  beforeEach(() => render(
    <ContextProvider>
      <OverviewProvider>
        <Overview />
      </OverviewProvider>
    </ContextProvider>
  ));

  it('Product Details should render', async () => {
    const reviewsText = await screen.findByText(/^Read all reviews/)
    expect(reviewsText).toBeInTheDocument();
    expect(reviewsText).toHaveTextContent('Read all reviews')
  });

  // ==================================
  //      Style Selector To-Dos:
  // Check values in drop-downs (Size, Quantity)
  // ==================================
  describe('Style Selector', () => {
    it('should render', async () => {
      const styleSelector = await screen.findByRole('heading', { name: /^Style/i });
      expect(styleSelector).toBeInTheDocument();
      expect(styleSelector).toHaveTextContent('Style >')
    })

    it('Style Selector should have a list of sizes S-2XL to choose from', async () => {
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

  describe('Overview Buttons', () => {
    it('Add To Bag button should render', async () => {
      // const starToggle = await screen.findByRole('button', { name: /^add-to-cart/i });
      const button = await screen.findByText('+ Add to Bag');
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('+ Add to Bag');
    })

    it('Star Toggle should render', async () => {
      // const starToggle = await screen.findByRole('button', { name: /⭐/i });
      const button = await screen.findByText('⭐');
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('⭐');
    })
  });

  // DEBUG TODO: Figure out why images only render sometimes
  describe('Overview Images', () => {
    // =============================================
    //                 Large Image
    // =============================================
    it('Large Image should render', async () => {
      const largeImageByAlt = await waitFor(() => screen.getByRole("img", { name: /^image-lg$/i }));
      expect(largeImageByAlt).toBeInTheDocument();
    })

    // =============================================
    //                 Image Modal
    // =============================================
    it('Modal should exist', async () => {
      const img = await waitFor(() => screen.getByRole("img", { name: /^image-lg$/i }));
      expect(img).toBeInTheDocument();

      await userEvent.click(img);

      // const modal = await waitFor(() => screen.getByRole("img", { name: /modal/i }));
		  // expect(modal).toHaveClass('modal-hidden');
      // expect(modal).toBeInTheDocument();
		  // expect(modal).toHaveClass('modal__content');
    })

    // =============================================
    //           Carousel Debug TO-DO
    // =============================================
    // it('Carousel should render', async () => {
    //   const carousel = await waitFor(() => screen.getByRole("img", { name: /^carousel/i }));
    //   expect(carousel).toBeInTheDocument();
    // })
  });
});
