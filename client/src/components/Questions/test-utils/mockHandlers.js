import { rest } from 'msw';
import SampleData from "../../../../../ExampleData/index.js";

const hostPath = window.location.host;

export const handlers = [
  rest.post(`${window.location.origin}/products`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(SampleData['products'])
    )
  }),

  rest.post(`${window.location.protocol}//${window.location.hostname}/products`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(SampleData['/products'])
    )
  }),

  rest.get(`${window.location.origin}/qa/questions`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(SampleData['/qa/questions'].results)
    )
  }),

  rest.get(`${window.location.origin}/qa/questions/:question_id/answers`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(SampleData['/qa/questions/:question_id/answers'].results)
    )
  }),
]
