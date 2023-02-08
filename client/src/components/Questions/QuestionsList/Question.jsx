import React, {useEffect} from "react";
import AnswerModal from "../Modals/AnswerModal.jsx";
import useModal from "../hooks/useModal.jsx";
import styles from "../questions.module.css";
import useReport from "../hooks/useReport.jsx";
import useHelpful from "../hooks/useHelpful.jsx";

function Question({ q }) {

  const { isShowing, toggle } = useModal();
  const [isReported, reportQA, reportedStyle] = useReport(q.question_id, 'questions');
  const [isHelpful, helpfulQA, helpfulStyle, updateIsHelpful] = useHelpful(q.question_id, 'questions');

  useEffect(() => {
    updateIsHelpful(q.question_id);
  }, [q])

  return (
    <div className={styles.question}>
      <b data-testid="test-question">Q: {q.question_body}</b>
      <sub> Helpful?&nbsp;
        {isHelpful ?
        <a style={helpfulStyle}>Yes ({q.question_helpfulness})</a> :
        <a onClick={helpfulQA}>Yes ({q.question_helpfulness})</a>
        }&nbsp;
        | <a onClick={toggle}> Add Answer</a>&nbsp;
        | {isReported ?
          <a style={reportedStyle}>Reported</a> :
          <a onClick={reportQA}>Report</a>
        }&nbsp;&nbsp;
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