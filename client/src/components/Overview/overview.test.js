/**
 * @jest-environment jsdom
 */
require('dotenv').config()
import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

// Components
import Overview from './components/Overview.jsx';
import Images from './components/Images.jsx';
import ProductInfo from './components/ProductInfo.jsx';
import Modal from './components/Modal.jsx';
import ThumbnailCarousel from './components/ThumbnailCarousel.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToBag from './components/AddToBag.jsx';

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
describe('Overview Widget', () => {
  it('Overview should render to browser', async () => {
    render(<Overview />);
    const overview = await screen.findByRole('heading', { name: /overview/i });
    expect(overview).toBeInTheDocument();
    expect(overview).toHaveTextContent('Product Overview Widget');
  })

  // describe('Images Component', () => {
  //   it('Images ', async () => {
  //     render(<Images />);
  //     const images = await screen.findByRole('img');
  //     expect(images).toBeInTheDocument();
  //   })
  // })

  // describe('ProductInfo Component', () => {
  //   it('ProductInfo should render', async () => {
  //     render(<ProductInfo />)
  //     await waitFor(() => screen.getByRole('heading'))
  //     expect(screen.getByRole('heading')).toHaveTextContent('ProductInfo Component')
  //   })
  // })

  // describe('Modal Component', () => {
  //   it('Modal should render', async () => {
  //     render(<Modal />)
  //     await waitFor(() => screen.getByRole('heading'))
  //     expect(screen.getByRole('heading')).toHaveTextContent('Modal Component')
  //   })
  // })

  // describe('ThumbnailCarousel Component', () => {
  //   it('ThumbnailCarousel should render', async () => {
  //     render(<ThumbnailCarousel />)
  //     await waitFor(() => screen.getByRole('heading'))
  //     expect(screen.getByRole('heading')).toHaveTextContent('ThumbnailCarousel Component')
  //   })
  // })

  // describe('StyleSelector Component', () => {
  //   it('StyleSelector should render', async () => {
  //     render(<StyleSelector />)
  //     await waitFor(() => screen.getByRole('heading'))
  //     expect(screen.getByRole('heading')).toHaveTextContent('StyleSelector Component')
  //   })

  // })

  // describe('AddToBag Component', () => {
  //   it('AddToBag should render', async () => {
  //     render(<AddToBag />)
  //     await waitFor(() => screen.getByRole('heading'))
  //     expect(screen.getByRole('heading')).toHaveTextContent('AddToBag Component')
  //   })
  // })
});

