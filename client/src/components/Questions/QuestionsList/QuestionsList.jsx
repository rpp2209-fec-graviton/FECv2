import React, { useState, useEffect } from "react";

//COMPONENTS
import Question from "./Question.jsx";
import AnswersList from ".././Answers/AnswersList.jsx";
import useQuestionsList from "../hooks/useQuestionsList.jsx";
import SearchBar from './SearchBar.jsx';
import MoreAnsweredQ from "./MoreAnsweredQ.jsx";
import QuestionModal from "../Modals/QuestionModal.jsx";

//HOOKS
import useCount from "../hooks/useCount.jsx";
import usePage from "../hooks/usePage.jsx";
import useMore from "../hooks/useMoreQA.jsx";
import useModal from "../hooks/useModal.jsx";

//CONTEXT
import { useProductContext } from "../../Context/ContextProvider.jsx";

function QuestionsList(props) {
  const [page, makePage] = usePage(1);
  const [count, makeCount] = useCount(2);
  const [questionsList, getQList, filterQList] = useQuestionsList();
  const [more, showMore, toggleMore] = useMore();
  const { isShowing, toggle } = useModal();
  
  const {currentProductId, useClickLogger} = useProductContext();
  const [withClickLogger] = useClickLogger('Questions');

  /*Implementation tasks
    [] Expands 2 Questions at a time and Scrollable
    [] Confined to a single page, any longer should be scrollable
  */
  var updateQList = () => {
    getQList('71698', page);
  }

  var checkQList = () => {
    if (count >= questionsList.length - 2 && questionsList.length !== 0) {
      toggleMore();
    }
  }


  useEffect(() => {
    getQList('71699', page);
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
      {questionsList.length > 0 && withClickLogger(<MoreAnsweredQ {...{ count, moreQ, showMoreQ, makeCount, makePage, updateQList, checkQList }} />)}
      <button onClick={toggle}> Submit a Question + </button>
      <QuestionModal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  )
}

export default QuestionsList;
