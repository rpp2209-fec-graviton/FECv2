import React, { useState, useEffect } from "react";
import Question from "./Question.jsx";
import AnswersList from ".././Answers/AnswersList.jsx";
import useQuestionsList from "./hooks/useQuestionsList.jsx";
import useCount from ".././hooks/useCount.jsx";
import usePage from ".././hooks/usePage.jsx";
import SearchBar from './SearchBar.jsx';

function QuestionsList(props) {
  const [page, incrementPage] = useState(1);
  const [questionsList, updateQList, filterQList] = useQuestionsList();
  const [count, incrementCount, resetCount] = useCount(2);
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
      <SearchBar {...{ filterQList }} />
      {questionsList.map((q, index) => {
        if (index >= count) {
          return;
        }
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
