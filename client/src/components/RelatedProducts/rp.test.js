/**
 * @jest-environment jsdom
 */

import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExampleProducts from '../../../../ExampleData/APIs/products.js'
import RelatedProducts from './RelatedProducts.jsx'
import RPList from './RPList.jsx'
import RPCard from './RPCard.jsx'

var testRpList = [
  {
      "id": 71702,
      "campus": "hr-rpp",
      "name": "Pumped Up Kicks",
      "slogan": "Faster than a just about anything",
      "description": "The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.",
      "category": "Kicks",
      "default_price": "89.00"
  },
  {
      "id": 71704,
      "campus": "hr-rpp",
      "name": "YEasy 350",
      "slogan": "Just jumped over jumpman",
      "description": "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
      "category": "Kicks",
      "default_price": "450.00"
  },
  {
      "id": 71705,
      "campus": "hr-rpp",
      "name": "Summer Shoes",
      "slogan": "A risky call in the spring or fall",
      "description": "Low-top panelled buffed leather and mesh sneakers. Sizing embroidered in black at round toe. Tonal lace-up closure. Pull-loop and rubberized style name at padded tongue. Padded collar. Pull-loop at heel collar. Logo embroidered in black at outer side. Tonal treaded rubber sole. Tonal stitching.",
      "category": "Kicks",
      "default_price": "59.00"
  }
];

var testRpStyles = [
  {
      "product_id": "71702",
      "results": [
          {
              "style_id": 444247,
              "name": "White",
              "original_price": "89.00",
              "sale_price": null,
              "default?": true,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  }
              ],
          }
      ]
  },
  {
      "product_id": "71704",
      "results": [
          {
              "style_id": 444254,
              "name": "Zebra Stripe",
              "original_price": "900.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  }
              ]
          }
      ]
  },
  {
      "product_id": "71705",
      "results": [
          {
              "style_id": 444263,
              "name": "White",
              "original_price": "59.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
                  }
              ]

          }
      ]
  }
]

test('should render RelatedProducts component', () => {
  render(
    <BrowserRouter>
      <RelatedProducts/>
    </BrowserRouter>
  );
  const element = screen.getByTestId('rp');
  expect(element).toBeInTheDocument();
});

test('should render RPList component', () => {
  //todo
  render(<RPList />);
  const list = screen.getByTestId('rplist');
  expect(list).toBeInTheDocument();
});

test('RPList component should render correct number of RPCard components', () => {
  render(<RPList rps={testRpList} rpStyles={testRpStyles}/>);
  const renderedRps = screen.getAllByTestId('rpcard');
  expect(renderedRps).toHaveLength(3);
});

test('should render each related product with all info complete', () => {
  render(<RPCard rp={testRpList[0]} rpStyles={testRpStyles[0].results}/>);
  const renderedCard = screen.getByTestId('rpcard');
  expect(renderedCard).toHaveTextContent('Pumped Up Kicks');
  expect(renderedCard).toHaveTextContent('Kicks');
  expect(renderedCard).toHaveTextContent('89.00');
});