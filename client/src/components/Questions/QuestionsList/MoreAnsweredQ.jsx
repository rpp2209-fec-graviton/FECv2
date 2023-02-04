import React, { useEffect } from "react";
import styles from "../questions.module.css";

export default function MoreAnsweredQ({ count, more, showMore, makeCount, makePage, updateQList, checkQList}) {

  return (
    <div>
      <button className={styles.questionsView__btn} onClick={() => { showMore(count, makeCount, makePage, updateQList, checkQList) }}>
        {more ? 'More Answered Questions' : 'Collapse Answers'}
      </button>
    </div>
  )
}