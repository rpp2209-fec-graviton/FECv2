import React, { useState, useEffect } from "react";
import Answer from "./Answer.jsx";
import SampleData from "../../../../../ExampleData/index.js";

function AnswersView({ question_id }) {
  /*Implementation Tasks
  1. Sort Answers by helpfulness/Sellar
  3. Implement "See More Answers"/"Collapse Answers"
  4. Confined to half the screen
  */
  const [answersList, setAnswersList] = useState(SampleData['/qa/questions/:question_id/answers'].results);
  const [count, setCount] = useState(2);
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(true);

  return (
    <div className="answersList">
      {answersList.slice(0, count).map((ans, index) => {
        return <div className="answer">
          <Answer key={ans.answer_id} ans={ans} />
        </div>
      })}
      <sub onClick={() => { setMore(!more) }}>
        {more ? 'See More Answers' : 'Collapse Answers'}
      </sub>
    </div>
  )

}

export default AnswersView;
