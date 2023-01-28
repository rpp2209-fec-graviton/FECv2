import React from "react";

function Answer({ans}) {
 var createDate = (date) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleString([], options);
  }

  return (
    <div>
      <p data-testid="test-answer"><b>A: </b>{ans.body}</p>
      <sub>
        by {ans.answerer_name}, {createDate(ans.date)} |
         Helpful?
        <a> Yes ({ans.helpfulness}) </a>
        | <a> Report </a>
      </sub>
    </div>
  )
}

export default Answer;