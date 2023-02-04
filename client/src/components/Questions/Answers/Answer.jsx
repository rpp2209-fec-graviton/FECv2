import React from "react";
//CSS
import styles from "../questions.module.css";
import useReport from "../hooks/useReport.jsx";
import useHelpful from "../hooks/useHelpful.jsx";

function Answer({ ans }) {
  const [isReported, reportQA, reportedStyle] = useReport(ans.answer_id, 'answers');
  const [isHelpful, helpfulQA, helpfulStyle] = useHelpful(ans.answer_id, 'answers');

  var createDate = (date) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleString([], options);
  }


  return (
    <div className={styles.answer} >
      <p data-testid="test-answer"><b>A: </b>{ans.body}
        <sub>
          by {ans.answerer_name}, {createDate(ans.date)} |
          Helpful?&nbsp;
          {isHelpful ?
            <a style={helpfulStyle}>Yes ({ans.helpfulness + 1})</a> :
            <a onClick={helpfulQA}>Yes ({ans.helpfulness})</a>
          }&nbsp;
          | {isReported ?
            <a style={reportedStyle}>Reported</a> :
            <a onClick={reportQA}>Report</a>
          }&nbsp;&nbsp;
        </sub>
      </p>
    </div>
  )
}

export default Answer;