import React, { useEffect } from "react";
import globalStyles from "../../Home/home.module.css";
import styles from "../questions.module.css";

export default function MoreAnsweredQ({ count, more, showMore, makeCount, makePage, updateQList, checkQList}) {

  return (
    <div>
      <button data-testid="load-more-questions" className={`${globalStyles['btn-width']} ${globalStyles.btn}`} onClick={() => { showMore(count, makeCount, makePage, updateQList, checkQList) }}>
        {more ? 'More Answered Questions' : 'Collapse Answers'}
      </button>
    </div>
  )
}