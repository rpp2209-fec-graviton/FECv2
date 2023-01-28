import React, { useState, useEffect } from "react";
import Answer from "./Answer.jsx";
import SampleData from "../../../../../ExampleData/index.js";
import useAnswersList from "./hooks/useAnswersList.jsx";
import useCount from "../hooks/useCount.jsx";
import useMoreA from "./hooks/useMoreA.jsx";

function AnswersList({ question_id }) {
  /*Implementation Tasks
  1. Sort Answers by helpfulness/Sellar
  3. Implement "See More Answers"/"Collapse Answers"
  4. Confined to half the screen
  */
  const [answersList, updateAList] = useAnswersList();
  const [count, makeCount] = useState(2);
  const [page, makePage] = useState(1);
  const [moreA] = useMoreA();


  useEffect(() => {
    updateAList(question_id, page)
  }, [])


  return (
    <div className="AnswersList">
      {answersList.length > 0 && answersList.slice(0, count).map((ans, index) => {
        return <div key={ans.answer_id} className="Answer">
          <Answer ans={ans} />
        </div>
      })}
      <sub onClick={() => { setMore(!more) }}>
        {moreA ? 'See More Answers' : 'Collapse Answers'}
      </sub>
    </div>
  )

}

export default AnswersList;
