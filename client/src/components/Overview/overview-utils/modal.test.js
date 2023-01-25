/**
 * @jest-environment jsdom
 */

import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Overview from '../components/Overview.jsx';
// import Modal from '../components/Modal.jsx';
import toggleModal from './modal.js';

// ==================================
//    ⬇ ⭐ TESTING THE TESTS ⭐ ⬇
// ==================================

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

describe('modal', () => {
	it('show modal button should appear on page load', async () => {
    render(<Overview />)

		await waitFor(() => screen.getByRole('button'))

		expect(screen.getByRole('button')).toHaveTextContent('Show Modal')
  });
});

describe('toggle modal', () => {
	it('should exist', function() {
    expect(toggleModal).not.toEqual(undefined)
  });

	it('should be a function', function() {
    expect(typeof toggleModal).toBe('function')
  });
});