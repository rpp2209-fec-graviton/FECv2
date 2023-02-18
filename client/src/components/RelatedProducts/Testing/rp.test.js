/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import { mswServer } from './server.js'
import ContextProvider from '../../Context/ContextProvider.jsx';
import RPProvider from '../Context/RPProvider.jsx';
import RelatedProducts from '../RelatedProducts.jsx';
import RPList from '../RPList.jsx';
import YourOutfitList from '../YourOutfitList.jsx'
import RPCard from '../RPCard.jsx';

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

function renderRelatedProducts() {
  return render(
    <BrowserRouter>
      <ContextProvider>
        <RPProvider>
          <RelatedProducts/>
        </RPProvider>
      </ContextProvider>
    </BrowserRouter>
  );
};

function renderRPList() {
    return render(
      <BrowserRouter>
        <ContextProvider>
          <RPProvider>
            <RPList/>
          </RPProvider>
        </ContextProvider>
      </BrowserRouter>
    );
};

function renderYourOutfitList() {
    return render(
      <BrowserRouter>
        <ContextProvider>
          <RPProvider>
            <YourOutfitList/>
          </RPProvider>
        </ContextProvider>
      </BrowserRouter>
    );
};

test('should render RelatedProducts component', async () => {
  const { getByTestId, queryAllByTestId, findByTestId } = renderRelatedProducts();
  await waitFor(() => {
    const element = screen.getByTestId('rp');
    expect(element).toBeInTheDocument();
  });
});

test('should render RPList component', async () => {
  const { getByTestId, queryAllByTestId, findByTestId } = renderRPList();
  await waitFor(() => {
    const list = screen.getByTestId('rplist');
    expect(list).toBeInTheDocument();
  });
});

test('should render YourOutfitList component', async () => {
  const { getByTestId, queryAllByTestId, findByTestId } = renderYourOutfitList();
  await waitFor(() => {
    const list = screen.getByTestId('outfitlist');
    expect(list).toBeInTheDocument();
  });
});

test('RPList component should render correct number of RPCard components', async () => {
  const { getByTestId, queryAllByTestId, findByTestId } = renderRelatedProducts();
  await waitFor(() => {
    const renderedRps = screen.getAllByTestId('rpcard');
    expect(renderedRps).toHaveLength(4);
  });
});

test('should render each related product with all info complete', async () => {
  const { queryAllByTestId, findByTestId } = renderRelatedProducts();
  await waitFor(() => {
    const renderedCard = screen.getAllByTestId('rpcard');
    expect(renderedCard[0]).toHaveTextContent('Air Minis 250');
    expect(renderedCard[0]).toHaveTextContent('Basketball Shoes');
  });
});