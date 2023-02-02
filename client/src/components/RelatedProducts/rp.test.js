/**
 * @jest-environment jsdom
 */

import React from 'react';
// import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedProducts from './RelatedProducts'
import RPList from './RPList'
import RPCard from './RPCard'

var testRpList = [
  {
      "id": 71701,
      "name": "Penny Loafers",
      "category": "Shoes",
      "default_price": "99.00",
  },
  {
      "id": 71705,
      "name": "Bomber Jacket",
      "category": "Outerwear",
      "default_price": "59.00",
  },
  {
      "id": 71703,
      "name": "Ray-Bans",
      "category": "Accessories",
      "default_price": "120.00",
  }
];

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
  render(<RPList/>);
  const list = screen.getByTestId('rplist');
  expect(list).toBeInTheDocument();
});

test('RPList component should render correct number of RPCard components', () => {
  render(<RPList rps={testRpList}/>);
  const renderedRps = screen.getAllByTestId('rpcard');
  expect(renderedRps).toHaveLength(3);
});

test('should render each related product with all info complete', () => {
  render(<RPCard rp={testRpList[0]}/>);
  const renderedCard = screen.getByTestId('rpcard');
  expect(renderedCard).toHaveTextContent('Penny Loafers');
  expect(renderedCard).toHaveTextContent('Shoes');
  expect(renderedCard).toHaveTextContent('99.00');
});