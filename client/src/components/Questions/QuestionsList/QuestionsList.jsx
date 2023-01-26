import React, { useState, useEffect } from "react";
import Question from "./Question.jsx";
import AnswersList from ".././Answers/AnswersList.jsx";
import SampleData from "../../../../../ExampleData/index.js";

function QuestionsList(props) {
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
      {questionsList.slice(0, count).map((q, index) => {
        return (
          <div className="Question" key={index}>
            <Question q={q} />
            <AnswersList question_id={q.question_id} />
          </div>
        )
      })}
      <button> MORE ANSWERED QUESTIONS </button>
      <button> ADD A QUESTION + </button>
    </div>
  )
}

export default QuestionsList;
