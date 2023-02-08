/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent, screen, waitFor, act, } from "@testing-library/react";
import '@testing-library/jest-dom';

//COMPONENTS
import QuestionsList from "./QuestionsList/QuestionsList.jsx";
import Question from "./QuestionsList/Question.jsx";
import AnswersList from "./Answers/AnswersList.jsx";
import Answer from "./Answers/Answer.jsx";
import SearchBar from "./QuestionsList/SearchBar.jsx";
import QuestionsView from "./index.js";

//HOOKS
import useQuestionsList from "./hooks/useQuestionsList.jsx"

//CONTEXT
import QuestionsProvider from "./Context/QuestionsProvider.jsx";
import ContextProvider from "../Context/ContextProvider.jsx";

//server
import { mswQuestionsServer } from "./test-utils/index.js"

beforeAll(() => mswQuestionsServer.listen())
afterEach(() => mswQuestionsServer.resetHandlers())
afterAll(() => mswQuestionsServer.close())


const renderQuestionsView = () => {
  return render(
    <ContextProvider>
      <QuestionsProvider>
        <QuestionsView />
      </QuestionsProvider>
    </ContextProvider>
  );
};

const renderAnswersList = () => {
  return render(
    <ContextProvider>
      <QuestionsProvider>
        <AnswersList />
      </QuestionsProvider>
    </ContextProvider>
  );
};


describe("Questions and Answers List Component", () => {
  it("should only render two questions by default", async () => {
    const { findAllByTestId, queryAllByTestId, findByTestId } = renderQuestionsView()
    await waitFor(() => {
      const questionsList = queryAllByTestId('QandA');
      expect(questionsList.length).toBe(2);
    });
  });

  it("should load more questions when prompted", async () => {
    const { findAllByTestId, queryAllByTestId, findByTestId } = renderQuestionsView();
    await waitFor(() => {
      const questionsList = queryAllByTestId('QandA');
      expect(questionsList.length).toBe(2);
    });
    fireEvent.click(await findByTestId('load-more-questions'));
    expect((await queryAllByTestId('QandA')).length).toBe(3);
  });

  it("should collapse questions list when prompted", async () => {
    const { findAllByTestId, queryAllByTestId, findByTestId, getByTestId } = renderQuestionsView();
    await waitFor(() => {
      const questionsList = queryAllByTestId('QandA');
      expect(questionsList.length).toBe(2);

      fireEvent.click(getByTestId('load-more-questions'));
      expect((queryAllByTestId('QandA')).length).toBe(3);
    });

    fireEvent.click(getByTestId('load-more-questions'));
    expect((await queryAllByTestId('QandA')).length).toBe(2);
  });
});

describe("Answer List Component", () => {
  it("should only render two answers for by default", async () => {
    const { findAllByTestId, queryAllByTestId, findByTestId } = renderAnswersList()
    await waitFor(() => {
      const answersList = queryAllByTestId('answers__list');
      expect(answersList.length).toBe(2);
    });
  });

  it("should load more questions when prompted", async () => {
    const { findAllByTestId, queryAllByTestId, findByTestId, getByTestId } = renderAnswersList()
    await waitFor(() => {
      const answersList = queryAllByTestId('answers__list');
      expect(answersList.length).toBe(2);
      expect(findByTestId('see-more-answers')).toBeTruthy();
    });
    fireEvent.click(getByTestId('see-more-answers'));
    expect((queryAllByTestId('answers__list')).length).toBe(3);
  });

  // it("should collapse questions list when prompted", async () => {
  //   const { findAllByTestId, queryAllByTestId, findByTestId, getByTestId } = renderQuestionsView();
  //   await waitFor(() => {
  //     const questionsList = queryAllByTestId('QandA');
  //     expect(questionsList.length).toBe(2);

  //     fireEvent.click(getByTestId('load-more-questions'));
  //     expect((queryAllByTestId('QandA')).length).toBe(3);
  //   });

  //   fireEvent.click(getByTestId('load-more-questions'));
  //   expect((await queryAllByTestId('QandA')).length).toBe(2);
  // });
});

describe("Question Component", () => {
  it("should only render a question", async () => {
    // const { findByTestId } = renderQuestion();

    // console.log(await findByTestId('question'))

  });
});



  // it("should render two more questions when button is clicked", async () => {
  //   let { getByText, container } = render(<QuestionsList questionsList={[0, 1, 2, 3, 4]} />);
  //   fireEvent.click(getByText('MORE ANSWERED QUESTIONS'));
  //   expect(await container.getElementsByClassName('Question').length).toBe(4);
  // })

// describe("Answers View Component", () => {
//   it("should only render two answers by default", async () => {
//     let { container } = render(<AnswersList answersList={[0, 1, 2, 3]} />);
//     expect(await container.getElementsByClassName('Answer').length).toBe(2);
//   });

//   it("should render two more answers when button is clicked", async () => {
//     let { getByText, container } = render(<AnswersList answersList={[0, 1, 2, 3, 4]} />);
//     fireEvent.click(getByText('See More Answers'));
//     expect(await container.getElementsByClassName('Answer').length).toBe(4);
//   })
// })

// describe("Search Bar Component", () => {
//   it("should have placeholder text", async () => {
//     let { getByRole } = render(<SearchBar />);
//     expect(await getByRole('textbox').placeholder).toBe('Have a question? Search for more answers...')
//   })
//   it("should update search input filter when typed", async () => {
//     let { getByRole } = render(<SearchBar />);
//     fireEvent.input(getByRole('textbox'), { target: { value: 'yes' } });
//     expect(await getByRole('textbox').value).toBe('yes');
//   })
// })

// describe("Answer Component", () => {
//   it("should precede every answer with A:", async () => {
//     let { getByTestId } = render(<Answer ans={{ body: 'Yes, this was helpful' }} />);
//     expect(await getByTestId('test-answer').textContent).toBe('A: Yes, this was helpful');
//   })
// })

// describe("Qusetion Component", () => {
//   it("should precede every answer with Q:", async () => {
//     let { getByTestId } = render(<Question q={{ question_body: 'Was this helpful?' }} />);
//     expect(await getByTestId('test-question').textContent).toBe('Q: Was this helpful?');
//   })
// })