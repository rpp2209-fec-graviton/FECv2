import React from "react";
import AnswerModal from "../Modals/AnswerModal.jsx";
import useModal from "../hooks/useModal.jsx";
import styles from "../questions.module.css";

function Question({ q }) {

  const { isShowing, toggle } = useModal();

  return (
    <div className={styles.question}>
      <b data-testid="test-question">Q: {q.question_body}</b>
      <sub> Helpful?
        <a> Yes&nbsp;({q.question_helpfulness}) </a>
        | <a onClick={toggle}> Add Answer </a>
        <a></a>
      </sub>
      <AnswerModal
        isShowing={isShowing}
        hide={toggle}
        q={q}
        question_id={q.question_id}
      />
    </div >
  )
}

export default Question;