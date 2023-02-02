import React, { useState, useEffect } from "react";
//COMPONENTS
import Answer from "./Answer.jsx";
import SeeMoreAnswers from "./SeeMoreAnswersBtn.jsx";
import AnswerModal from "../Modals/AnswerModal.jsx";

//HOOKS
import useAnswersList from "../hooks/useAnswersList.jsx";
import useCount from "../hooks/useCount.jsx";
import usePage from "../hooks/usePage.jsx";
import useMoreA from "../hooks/useMoreQA.jsx";
import useModal from "../hooks/useModal.jsx";

function AnswersList({ question_id }) {
  /*Implementation Tasks
  1. Sort Answers by helpfulness/Sellar
  3. Implement "See More Answers"/"Collapse Answers"
  4. Confined to half the screen
  */
  const [answersList, getAList] = useAnswersList();
  const [count, makeCount] = useCount(2);
  const [page, makePage] = usePage(1);
  const [more, showMore, toggleMore] = useMoreA();
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    getAList(question_id, page)
  }, [])

  var updateAList = () => {
    getAList(question_id, page)
  };

  var checkAList = () => {
    if (count >= answersList.length - 2 && answersList.length !== 0) {
      toggleMore();
    }
  };

  return (
    <div className="AnswersList">
      {answersList.length > 0 && answersList.slice(0, count).map((ans, index) => {
        return <div key={ans.answer_id} className="Answer">
          <Answer ans={ans} />
        </div>
      })}
      {answersList.length > 2 ?
        <SeeMoreAnswers {...{ count, more, showMore, makeCount, makePage, updateAList, checkAList }} />
        : <sub onClick={toggle}> Submit an Answer </sub>}
      <AnswerModal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  )

}

export default AnswersList;
