/** @jest-environment jsdom */
require('dotenv').config()
import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { logRoles } from '@testing-library/dom';
import '@testing-library/jest-dom';

// =============================================
//          Component & State Imports
// =============================================
// Components
import Button from '../components/Button.jsx';
import Images from '../components/Images.jsx';
import Modal from '../components/Modal.jsx';
import Overview from '../components/Overview.jsx';
import ProductInfo from '../components/ProductInfo.jsx';
import ReviewsLink from '../components/ReviewsLink.jsx';
import StarRatingBar from '../../StarRatingBar/StarRatingBar.jsx';
import StyleSelector from '../components/StyleSelector.jsx';
import ThumbnailCarousel from '../components/ThumbnailCarousel.jsx';
import Thumbnail from '../components/Thumbnail.jsx';

// Context
import ContextProvider from "../../Context/ContextProvider.jsx";
import OverviewProvider from "../Context/OverviewProvider.jsx";

import { fetch } from '../../../../../server/utils/data-utils.js';

// ==================================
//    ⬇ ⭐ TESTING THE TESTS ⭐ ⬇
// ==================================
// describe('Testing Environment', () => {
//   it('uses jsdom', () => {
//     const overview = document.createElement('div');
//     expect(overview).not.toBeNull();
//   });

//   it('uses jest-dom', function() {
//     document.body.innerHTML = `
//       <span data-testid="not-empty"><span data-testid="empty"></span></span>
//       <div data-testid="visible">Visible Example</div>
//     `

//     expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()
//     expect(screen.getByText('Visible Example')).toBeVisible()
//   });
// });

// // Check Access To Env Vars
// describe('ENV Variables', () => {
//   test('Receives process.env variables', () => {
//     expect(process.env.API_URL).toBe('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp');
//   });
// });

// ==================================
//     ⬇ ⭐ MSW / SERVER ⭐ ⬇
// ==================================
import { mswOverviewServer } from "./utils/mockServer.js";

beforeEach(() => mswOverviewServer.listen())
afterEach(() => mswOverviewServer.resetHandlers())
afterAll(() => mswOverviewServer.close())

// ==================================
//      ⬇ ⭐ UNIT TESTS ⭐ ⬇
//      Arrange, Assert, Act
// ==================================

// Utils
const renderWithContext = (component) => {

  return render(
    <ContextProvider>
      <OverviewProvider>
        {component}
      </OverviewProvider>
    </ContextProvider>
  );

};

describe('Server', () => {
  it('should fetch a list of products', async () => {

    renderWithContext(<Overview />);
    const fetch = jest.fn();

    await fetch('/products', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Data?', data);
        expect(data.length).toBe(3);
      }
    });
  });
});

describe('Overview', () => {

  it('Reviews Link should render', async () => {

    renderWithContext(<ReviewsLink />);

    await waitFor(() => {
      expect(screen.getByText(/^Read all/i)).toBeInTheDocument()
      expect(screen.getByText(/reviews$/i)).toBeInTheDocument()
    });
  });

  it('Star Ratings Bar should render', async () => {

    renderWithContext(<StarRatingBar />);

    await waitFor(() => expect(screen.getByText(/^☆/i)).toBeInTheDocument());
    // expect(screen.getByText(/^★/i)).toBeInTheDocument()
  });

  it('Product Details should render', async () => {
    const elem = renderWithContext(<ProductInfo />);
    logRoles(elem);

    await waitFor(() => expect(screen.getByText(/^\$/)).toBeInTheDocument())
  });

  // ==================================
  //      Style Selector To-Dos:
  // Check values in drop-downs (Size, Quantity)
  // ==================================
  // describe('Style Selector', () => {
  //   it('should render', async () => {
  //     const styleSelector = await screen.findByRole('heading', { name: /^Style/i });
  //     expect(styleSelector).toBeInTheDocument();
  //     expect(styleSelector).toHaveTextContent('Style >')
  //   })

  //   it('Style Selector should have a list of sizes S-2XL to choose from', async () => {
  //     const sizes = await screen.findAllByRole('option', { name: /size-option/i });
  //     // const elem = await screen.findAllByRole('listbox', { name: "sizes" });

  //     // TODO: Figure out why map over sizes doesn't work here
  //     const values = [];
  //     sizes.forEach(size => {
  //       values.push(size.value)
  //       expect(size).toBeInTheDocument();
  //     });
  //     expect(sizes.length).toBe(5);
  //     expect(values.length).toBe(5);
  //     expect(values).toEqual(['S', 'M', 'L', 'XL', '2XL']);
  //   });

  //   it('should have a list of quantities to choose from', async () => {
  //     const quantities = await screen.findAllByRole('option', { name: /qty-option/i });
  //     expect(quantities.length).toBe(10);
  //   });
  // });

  // describe('Overview Buttons', () => {
  //   it('Add To Bag button should render', async () => {
  //     // const starToggle = await screen.findByRole('button', { name: /^add-to-cart/i });
  //     const button = await screen.findByText('+ Add to Bag');
  //     expect(button).toBeInTheDocument();
  //     expect(button).toHaveTextContent('+ Add to Bag');
  //   })

  //   it('Star Toggle should render', async () => {
  //     // const starToggle = await screen.findByRole('button', { name: /⭐/i });
  //     const button = await screen.findByText('⭐');
  //     expect(button).toBeInTheDocument();
  //     expect(button).toHaveTextContent('⭐');
  //   })
  // });

  // DEBUG TODO: Figure out why images only render sometimes
  // describe('Overview Images', () => {
  //   // =============================================
  //   //                 Large Image
  //   // =============================================
  //   it('Large Image should render', async () => {
  //     const largeImageByAlt = await waitFor(() => screen.getByRole("img", { name: /^image-lg$/i }));
  //     expect(largeImageByAlt).toBeInTheDocument();
  //   })

  //   // =============================================
  //   //                 Image Modal
  //   // =============================================
  //   it('Modal should exist', async () => {
  //     const img = await waitFor(() => screen.getByRole("img", { name: /^image-lg$/i }));
  //     expect(img).toBeInTheDocument();

  //     await userEvent.click(img);

  //     // const modal = await waitFor(() => screen.getByRole("img", { name: /modal/i }));
	// 	  // expect(modal).toHaveClass('modal-hidden');
  //     // expect(modal).toBeInTheDocument();
	// 	  // expect(modal).toHaveClass('modal__content');
  //   })

  //   // =============================================
  //   //           Carousel Debug TO-DO
  //   // =============================================
  //   // it('Carousel should render', async () => {
  //   //   const carousel = await waitFor(() => screen.getByRole("img", { name: /^carousel/i }));
  //   //   expect(carousel).toBeInTheDocument();
  //   // })
  // });
});
