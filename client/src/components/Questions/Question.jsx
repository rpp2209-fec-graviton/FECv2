import React from "react";

function Question ({q}) {
  /* Implementation Tasks
  2. Display "Helpful?" Link and "Yes(#)" count
  3. "Add Answer" link
  */
  return (
    <div>
    <b>Q: {q.question_body} </b>
    <sub> Helpful?
      <a> Yes ({q.question_helpfulness}) </a>
      | <a> Add Answer </a>
      | <a></a>
    </sub>
  </div>
  )
}

export default Question;