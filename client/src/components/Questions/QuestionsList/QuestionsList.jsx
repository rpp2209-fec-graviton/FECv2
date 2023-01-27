import React, { useState, useEffect } from "react";
import Question from "./Question.jsx";
import AnswersList from ".././Answers/AnswersList.jsx";
import useQuestionsList from "./hooks/useQuestionsList.jsx";

function QuestionsList(props) {
  const [page, setPage] = useState(1);
  const [questionsList, updateQList] = useQuestionsList();
  const [count, setCount] = useState(2);
  /*Implementation tasks
    [] Expands 2 Questions at a time and Scrollable
    [] Sorts questions By helpfulness
    [] Confined to a single page, any longer should be scrollable
  */
  useEffect(() => {
    updateQList('71698', page);
  }, [])

  return (
    <div>
      {console.log('qList', questionsList)}
      {questionsList.slice(0, count).map((q, index) => {
        return (
          <div className="Question" key={index}>
            <Question q={q} />
            <AnswersList question_id={q.question_id} />
          </div>
        )
      })}
    </div>
  )
}

export default QuestionsList;
