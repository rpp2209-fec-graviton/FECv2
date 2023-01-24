import React, { useState, useEffect } from "react";
import Question from "./Question.jsx";
import AnswersView from "./Answers/AnswersView.jsx";
import SearchBar from "./SearchBar.jsx";
import QuestionModal from "./Modals/QuestionModal.jsx";
import AnswerModal from "./Modals/AnswerModal.jsx";
import SampleData from "../../../../ExampleData/index.js"

function QuestionsView(props) {
  const [questionsList, setQuestionsList] = useState(SampleData['/qa/questions'].results);
  const [count, setCount] = useState(2);
  const [page, setPage] = useState(1);
  /*Implementation tasks
    [] Expands 2 Questions at a time and Scrollable
    [] Sorts questions By helpfulness
    [] Confined to a single page, any longer should be scrollable
  */

  return (
    <div>
      <h2> Questions and Answers </h2>
      <SearchBar />
      {questionsList.slice(0, count).map((q, index) => {
        return (
          <div key={index}>
            <Question props={q} />
            <AnswersView props={q.question_id} />
          </div>
        )
      })}
      <button> MORE ANSWERED QUESTIONS </button>
      <button> ADD A QUESTION + </button>
    </div>
  )
}

export default QuestionsView;