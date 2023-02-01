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

// =============================================
//        ⬇ ⭐ Environment Tests ⭐ ⬇
// =============================================
test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});


// =============================================
//                Unit Tests
// =============================================
// TO-DO: Write implementation tests
// for toggle modal function
describe('toggle modal', () => {
	it('should exist', function() {
    expect(toggleModal).not.toEqual(undefined)
  });

	it('should be a function', function() {
    expect(typeof toggleModal).toBe('function')
  });
});