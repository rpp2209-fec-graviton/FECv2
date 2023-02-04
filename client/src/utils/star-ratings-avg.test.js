/**
 * @jest-environment jsdom
 */
import React, { createContext, useContext, useState } from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { useProductContext } from '../components/Context/ContextProvider.jsx';
import StarRating from '../components/Overview/components/StarRating.jsx';
import getRatingsAvg from './star-ratings-avg.js';

import mockAxios from 'axios';
jest.mock('axios');

// ==================================
//    ⬇ ⭐ Environment Tests ⭐ ⬇
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

  it("Mock returns undefined by default", () => {
    const mock = jest.fn();

    let result = mock("foo");

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("foo");
  });
});

// ==================================
//      ⬇ ⭐ Unit Tests ⭐ ⬇
// ==================================
describe.only('Star Ratings Calculation', () => {
  // Reset mocks between tests
  afterEach(jest.clearAllMocks);

  it('should exist', function() {
    expect(getRatingsAvg).not.toBe(undefined)
  });

  it('should be a function', function() {
    expect(typeof getRatingsAvg).toBe('function')
  });

  // To-Do: Cant get this test working
  it('WRITE TEST TO-DO should use mocked data', async () => {
    // const fetch = jest.mock('../../../server/utils/fetch.js');
    // const useContext = jest.fn();

    // await getRatingsAvg(1);

    // expect(fetch).toHaveBeenCalled();
  });
});

const mockData = {
  "product": 1,
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 1,
          "rating": 5,
          "summary": "mock-summary-1",
          "recommend": false,
          "response": null,
          "body": "mock-body-1",
          "date": "2023-01-04T00:00:00.000Z",
          "reviewer_name": "mock-reviewer-name-1",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 1,
                  "url": "mock-url-1-1"
              },
              {
                  "id": 2,
                  "url": "mock-url-1-2"
              }
          ]
      },
      {
          "review_id": 2,
          "rating": 5,
          "summary": "mock-summary-2",
          "recommend": false,
          "response": null,
          "body": "mock-body-2",
          "date": "2023-01-04T00:00:00.000Z",
          "reviewer_name": "mock-reviewer-name-2",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 1,
                  "url": "mock-url-2-1"
              },
              {
                  "id": 2,
                  "url": "mock-url-2-2"
              }
          ]
      },
      {
          "review_id": 3,
          "rating": 5,
          "summary": "mock-summary-3",
          "recommend": false,
          "response": null,
          "body": "mock-body-3",
          "date": "2023-01-04T00:00:00.000Z",
          "reviewer_name": "mock-reviewer-name-3",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 1,
                  "url": "mock-url-3-1"
              }
          ]
      },
      {
          "review_id": 4,
          "rating": 5,
          "summary": "mock-summary-4",
          "recommend": false,
          "response": null,
          "body": "mock-body-4",
          "date": "2023-01-04T00:00:00.000Z",
          "reviewer_name": "mock-reviewer-name-4",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 1,
                  "url": "mock-url-4-1"
              }
          ]
      },
      {
          "review_id": 5,
          "rating": 5,
          "summary": "mock-summary-5",
          "recommend": false,
          "response": null,
          "body": "mock-body-5",
          "date": "2023-01-04T00:00:00.000Z",
          "reviewer_name": "mock-reviewer-name-5",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 1,
                  "url": "mock-url-5-1"
              }
          ]
      }
  ]
}