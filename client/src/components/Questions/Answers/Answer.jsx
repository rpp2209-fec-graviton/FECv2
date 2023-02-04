import React from "react";
//CSS
import styles from "../questions.module.css";

function Answer({ ans }) {
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
          | <a> Report </a>
        </sub>
      </p>
    </div>
  )
}

export default Answer;