import React from "react";
//CSS
import styles from "../questions.module.css";
import useReport from "../hooks/useReport.jsx";

function Answer({ ans }) {
  const [isReported, reportQA, reportedStyle] = useReport(ans.answer_id, 'answers');

  var createDate = (date) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleString([], options);
  }


  return (
    <div className={styles.answer} >
      <p data-testid="test-answer"><b>A: </b>{ans.body}
        <sub>
          by {ans.answerer_name}, {createDate(ans.date)} |
          Helpful?
          <a> Yes ({ans.helpfulness}) </a>
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