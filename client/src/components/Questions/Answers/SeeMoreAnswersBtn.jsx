import React, { useEffect } from "react";

//CSS
import styles from "../questions.module.css";

export default function SeeMoreAnswersBtn({ count, more, showMore, makeCount, makePage, updateAList, checkAList}) {

  return (
    <>
      <sub className={styles.answer__seeMoreA} onClick={() => { showMore(count, makeCount, makePage, updateAList, checkAList) }}>
        {more ? 'See More Answers' : 'Collapse Answers'}
      </sub>
    </>
  );
};