/**
 * @jest-environment jsdom
 */
require('dotenv').config()
import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import Overview from './components/Overview.jsx';
// import Images from './components/Images.jsx';
// import ProductInfo from './components/ProductInfo.jsx';
// import Modal from './components/Modal.jsx';
// import ThumbnailCarousel from './components/ThumbnailCarousel.jsx';
// import StyleSelector from './components/StyleSelector.jsx';
// import AddToBag from './components/AddToBag.jsx';

// ==================================
//    ⬇ ⭐ TESTING THE TESTS ⭐ ⬇
// ==================================
describe('Testing Environment', () => {
  test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
});

// Make sure environment vars are loading
describe('Environment Variables', () => {
  test('Receives process.env variables', () => {
    expect(process.env.API_URL).toBe('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp');
  });
});

// ==================================
//     ⬇ ⭐ TESTING SERVER ⭐ ⬇
// ==================================
// https://testing-library.com/docs/react-testing-library/example-intro
describe('Server Test', () => {
  const server = setupServer(
    rest.get('http://localhost:3000', (req, res, ctx) => {
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
      rest.get('http://localhost:3000', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    // Assert something TODO
  });
});

// ==================================
//      ⬇ ⭐ UNIT TESTS ⭐ ⬇
// ==================================
describe('Widget / Layout / Rendering', () => {
  test('loads and displays <Overview />', async () => {
    // Arrange
    render(<Overview />)

    // Act
    await waitFor(() => screen.getByRole('heading'))

    // Assert
    expect(screen.getByRole('heading')).toHaveTextContent('Product Overview Widget')
  })

  // test('loads and displays <Images />', async () => {
  // 	render(<Images />)
  // 	await waitFor(() => screen.getByRole('heading'))
  //   expect(screen.getByRole('heading')).toHaveTextContent('Images Component')
  // })

  // test('<ProductInfo />', async () => {
  // 	render(<ProductInfo />)
  // 	await waitFor(() => screen.getByRole('heading'))
  //   expect(screen.getByRole('heading')).toHaveTextContent('ProductInfo Component')
  // })

  // test('<Modal />', async () => {
  // 	render(<Modal />)
  // 	await waitFor(() => screen.getByRole('heading'))
  //   expect(screen.getByRole('heading')).toHaveTextContent('Modal Component')
  // })

  // test('<ThumbnailCarousel />', async () => {
  // 	render(<ThumbnailCarousel />)
  // 	await waitFor(() => screen.getByRole('heading'))
  //   expect(screen.getByRole('heading')).toHaveTextContent('ThumbnailCarousel Component')
  // })

  // test('<StyleSelector />', async () => {
  //   render(<StyleSelector />)
  // 	await waitFor(() => screen.getByRole('heading'))
  //   expect(screen.getByRole('heading')).toHaveTextContent('StyleSelector Component')
  // })

  // test('<AddToBag />', async () => {
  //   render(<AddToBag />)
  // 	await waitFor(() => screen.getByRole('heading'))
  //   expect(screen.getByRole('heading')).toHaveTextContent('AddToBag Component')
  // })
});


