import React, { useState, useEffect } from "react";

//COMPONENTS
import Question from "./Question.jsx";
import AnswersList from ".././Answers/AnswersList.jsx";
import useQuestionsList from "../hooks/useQuestionsList.jsx";
import SearchBar from './SearchBar.jsx';
import MoreAnsweredQ from "./MoreAnsweredQ.jsx";
import QuestionModal from "../Modals/QuestionModal.jsx";

//HOOKS
import useCount from "../hooks/useCount.jsx";
import usePage from "../hooks/usePage.jsx";
import useMore from "../hooks/useMoreQA.jsx";
import useModal from "../hooks/useModal.jsx";

//CONTEXT
import { useQuestionsContext } from "../Context/QuestionsProvider.jsx";

//CSS
import globalStyles from "../../Home/home.module.css";
import styles from "../questions.module.css";

function QuestionsList(props) {
  const [page, makePage] = usePage(1);
  const [count, makeCount] = useCount(2);
  const [questionsList, getQList, filterQList] = useQuestionsList();
  const [more, setMore, showMore, toggleMore] = useMore();
  const { isShowing, toggle } = useModal();
  const {product_id, useClickLogger} = useQuestionsContext();
  const [withClickLogger] = useClickLogger('Questions');

  var updateQList = () => {
    getQList(product_id, page);
  }

  var checkQList = () => {
    if (count >= questionsList.length - 2 && questionsList.length !== 0) {
      toggleMore();
    }
  }


  useEffect(() => {
    getQList(product_id, page);
    makeCount.reset();
    makePage.reset();
    setMore(true);
  }, [product_id])

  return (
    <div className={styles.questionsView}>
      <SearchBar {...{ filterQList }} />
      <div data-testid="questionsView__list" className={styles.questionsView__list}>
        {questionsList ? questionsList.map((q, index) => {
          if (index >= count) {
            return;
          }
          return (
            < div data-testid="QandA" key={index}>
              <Question q={q} />
              <AnswersList question_id={q.question_id} q={q} />
            </ div >
          )
        }) : null}
      </div>
      {questionsList.length > 2 && <MoreAnsweredQ {...{ count, more, showMore, makeCount, makePage, updateQList, checkQList }} />}
      <button className={globalStyles.btn} onClick={toggle}>+ Submit a Question</button>
      <QuestionModal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  )
}

export default QuestionsList;
