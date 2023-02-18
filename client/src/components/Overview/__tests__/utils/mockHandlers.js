// import Sample Data to use for mocking
import { rest } from 'msw';
import SampleData from "../../../../../../ExampleData/index.js";

// Setup To-Do ?? (use localhost to test url instead of API ??)
const baseURL = process.env.API_URL;

// Product Handlers
export const fetchProducts_response = rest.get(baseURL + '/products', async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(SampleData['products'])
  )
});

export const fetchProducts_empty_response = rest.get(baseURL + '/products', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json([]))
});


// Product Styles Handlers
export const fetchStyles_response = rest.get(baseURL + '/products/:productId/styles' /* param must match formatting in server/index.js ?? */, async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(SampleData['/products/:product_id/styles'])
  )
});

export const fetchStyles_empty_response = rest.get(baseURL + '/products/:productId/styles', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json([]))
});

// Cart Handlers
export const fetchCart_response = rest.get(baseURL + '/cart', async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(SampleData['/cart'])
  )
});

export const fetchCart_empty_response = rest.get(baseURL + '/cart', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json([]))
});

export const handlers = [
  fetchProducts_response,
  fetchProducts_empty_response,
  fetchStyles_response,
  fetchStyles_empty_response<
  fetchCart_response,
  fetchCart_empty_response
];