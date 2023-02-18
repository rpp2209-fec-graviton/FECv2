import React, { useState, useEffect } from "react";
//COMPONENTS
import Answer from "./Answer.jsx";
import SeeMoreAnswers from "./SeeMoreAnswersBtn.jsx";
import AnswerModal from "../Modals/AnswerModal.jsx";

//HOOKS
import useAnswersList from "../hooks/useAnswersList.jsx";
import useCount from "../hooks/useCount.jsx";
import usePage from "../hooks/usePage.jsx";
import useMoreA from "../hooks/useMoreQA.jsx";
import useModal from "../hooks/useModal.jsx";

//CSS
import styles from "../questions.module.css";

//CONTEXT
import { useQuestionsContext } from "../Context/QuestionsProvider.jsx";

function AnswersList({ question_id, q }) {

  const [answersList, getAList] = useAnswersList();
  const [count, makeCount] = useCount(2);
  const [page, makePage] = usePage(1);
  const [more, setMore, showMore, toggleMore] = useMoreA();
  const { isShowing, toggle } = useModal();
  const {product_id} = useQuestionsContext();


  useEffect(() => {
    getAList(question_id, page);
    makeCount.reset();
    makePage.reset();
    setMore(true);
  }, [product_id])

  var updateAList = () => {
    getAList(question_id, page)
  };

  var checkAList = () => {
    if (count >= answersList.length - 2 && answersList.length !== 0) {
      toggleMore();
    }
  };

  return (
    <div className={styles.answersList}>
      {answersList.length > 0 ? answersList.map((ans, index) => {
        if (index >= count) {
          return;
        }

        return <div key={ans.answer_id} data-testid="answers__list">
          <Answer ans={ans} />
        </div>
      }) : <sub className={styles.answersList__noA} onClick={toggle}> Looks like there's no answers... Would you like submit one? </sub> }

      {answersList.length > 2 ?
        <SeeMoreAnswers {...{ count, more, showMore, makeCount, makePage, updateAList, checkAList }} />
        : null}
      <AnswerModal
        isShowing={isShowing}
        hide={toggle}
        q={q}
        question_id={q.question_id}
      />
    </div>
  )

}

export default AnswersList;
