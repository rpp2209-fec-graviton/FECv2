/**
 * @jest-environment jsdom
 */
import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import StarRating from '../components/StarRating.jsx';
import getRatingsAvg from './star-ratings-avg.js';

// ==================================
//    ⬇ ⭐ Environment Tests ⭐ ⬇
// ==================================
test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

// ==================================
//      ⬇ ⭐ Unit Tests ⭐ ⬇
// ==================================
describe('Star Ratings Calculation', () => {
  it('should exist', function() {
    expect(getRatingsAvg).not.toBe(undefined)
  });

  it('should be a function', function() {
    expect(typeof getRatingsAvg).toBe('function')
  });

  // it('should', function() {
  //   expect().toBe()
  // });
});
