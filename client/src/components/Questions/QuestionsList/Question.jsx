import React from "react";
import AnswerModal from "../Modals/AnswerModal.jsx";
import useModal from "../hooks/useModal.jsx";

function Question({ q }) {
  /* Implementation Tasks
  2. Display "Helpful?" Link and "Yes(#)" count
  */
  const { isShowing, toggle } = useModal();

  return (
    <>
      <b data-testid="test-question">Q: {q.question_body}</b>
      <sub> Helpful?
        <a> Yes ({q.question_helpfulness}) </a>
        | <a onClick={toggle}> Add Answer </a>
        <a></a>
      </sub>
      <AnswerModal
        isShowing={isShowing}
        hide={toggle}
        q={q}
        question_id={q.question_id}
      />
    </>
  )
}

export default Question;