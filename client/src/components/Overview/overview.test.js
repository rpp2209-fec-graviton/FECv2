/**
 * @jest-environment jsdom
 */

import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// import userEvent from '@testing-library/user-event' // Unnecessary with fireEvent?
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Overview from './Overview.jsx';

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