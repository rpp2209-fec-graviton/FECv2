import { rest } from 'msw';
import ExampleData from "../../../../../ExampleData/index.js";

console.log('windowlocation', window.location.origin)

export const handlers = [
  rest.get(`${window.location.origin}/undefined/products/:product_id/related`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(ExampleData['/products/:product_id/related'])
    )
  }),

  rest.get(`${window.location.origin}/undefined/products/:product_id/related`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(ExampleData['/products/:product_id/related'])
    )
  }),

  rest.get(`${window.location.origin}/products/:product_id/related`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(ExampleData['/products/:product_id/related'])
    )
  }),

  rest.get(`${window.location.origin}/undefined/products/:product_id/styles`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(ExampleData['/products/:product_id/styles'])
    )
  }),

  rest.get(`${window.location.origin}/undefined/reviews/meta`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(ExampleData['/reviews'])
    )
  }),

  rest.get(`${window.location.origin}/undefined/products/:product_id`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(ExampleData['/products/:product_id'])
    )
  })
];