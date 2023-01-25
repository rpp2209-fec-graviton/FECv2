/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import QuestionsView from "./QuestionsView.jsx";
import AnswersView from "./Answers/AnswersView.jsx";
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/*', (req, res, ctx) => {
    return res(ctx.status(200, 'Complete'));
  }),
)


test('Sample Test Suite', () => {
  expect(true).toBe(true);
});

describe("Questions View Component", () => {
  it("should only render two questions by default", () => {
    let { container } = render(<QuestionsView questionsList={[0,1,2]}/>);
    expect(container.getElementsByClassName('Question').length).toBe(2);
  });
})

describe("Answers View Component", () => {
  it("should only render two answers by default", () => {
    let { container } = render(<AnswersView answersList={[0,1,2,3]}/>);
    console.log(container);
    expect(container.getElementsByClassName('answer').length).toBe(2);
  });

})