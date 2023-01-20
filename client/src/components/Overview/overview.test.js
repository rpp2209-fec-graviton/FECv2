/**
 * @jest-environment jsdom
 */

import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import Overview from './Overview.jsx';
// import Images from './Images.jsx';
// import StyleCarousel from './StyleCarousel.jsx';
// import StyleSelector from './StyleSelector.jsx';
// import AddToCart from './AddToCart.jsx';

// ==================================
//     ⬇ ⭐ TESTING SETUP ⭐ ⬇
// ==================================
// https://testing-library.com/docs/react-testing-library/example-intro

const server = setupServer(
  rest.get('/', (req, res, ctx) => { // look up what ctx represents here
    return res(ctx.json({ greeting: 'hello there' }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


// ==================================
//    ⬇ ⭐ TESTING THE TESTS ⭐ ⬇
// ==================================

test('test runs even when doing nothing', () => {
	expect(true).toBe(true)
})

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

// ==================================
//      ⬇ ⭐ UNIT TESTS ⭐ ⬇
// ==================================
test('loads and displays <Overview />', async () => {
  // ARRANGE
	render(<Overview />)

  // ACT
	await waitFor(() => screen.getByRole('heading'))

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('Product Overview Widget')
})

test('loads and displays <Images />', async () => {
	render(<Images />)
	await waitFor(() => screen.getByRole('heading'))
  expect(screen.getByRole('heading')).toHaveTextContent('Images Component')
})

test('<StyleCarousel />', async () => {
	render(<StyleCarousel />)
	await waitFor(() => screen.getByRole('heading'))
  expect(screen.getByRole('heading')).toHaveTextContent('StyleCarousel Component')
})

test('<StyleSelector />', async () => {
  render(<StyleSelector />)
	await waitFor(() => screen.getByRole('heading'))
  expect(screen.getByRole('heading')).toHaveTextContent('StyleSelector Component')
})

test('<AddToCart />', async () => {
  render(<AddToCart />)
	await waitFor(() => screen.getByRole('heading'))
  expect(screen.getByRole('heading')).toHaveTextContent('AddToCart Component')
})
