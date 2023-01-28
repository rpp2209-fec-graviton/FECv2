import React, { useState, useEffect } from "react";

//COMPONENTS
import Question from "./Question.jsx";
import AnswersList from ".././Answers/AnswersList.jsx";
import useQuestionsList from "./hooks/useQuestionsList.jsx";
import SearchBar from './SearchBar.jsx';
import MoreAnsweredQ from "./MoreAnsweredQ.jsx";

//HOOKS
import useCount from "../hooks/useCount.jsx";
import usePage from "../hooks/usePage.jsx";
import useMoreQ from "./hooks/useMoreQ.jsx";

function QuestionsList(props) {
  const [page, makePage] = usePage(1);
  const [count, makeCount] = useCount(2);
  const [questionsList, getQList, filterQList] = useQuestionsList();
  const [moreQ, showMoreQ, toggleMoreQ] = useMoreQ();
  /*Implementation tasks
    [] Expands 2 Questions at a time and Scrollable
    [] Confined to a single page, any longer should be scrollable
  */
  var updateQList = () => {
    getQList('71698', page);
  }

  var checkQList = () => {
    if (count >= questionsList.length - 2 && questionsList.length !== 0) {
      toggleMoreQ();
    }
  }


  useEffect(() => {
    getQList('71698', page);
  }, [])

  return (
    <div>
      <SearchBar {...{ filterQList }} />
      <div>
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
      {questionsList.length > 0 && <MoreAnsweredQ {...{ count, moreQ, showMoreQ, makeCount, makePage, updateQList, checkQList }} />}
    </div>
  )
}

export default QuestionsList;
