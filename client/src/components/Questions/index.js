import React, { useRef } from "react";
import QuestionsList from './QuestionsList/QuestionsList.jsx';
import SearchBar from './QuestionsList/SearchBar.jsx';
import { useQuestionsContext } from './Context/QuestionsProvider.jsx';
import styles from './questions.module.css';

export default function QuestionsView() {
  const { modalAnchor } = useQuestionsContext();

  return (
    <div className={styles.overview} ref={modalAnchor}>
      <h2 className={styles.overview__header}> Questions and Answers </h2>
      <QuestionsList />
    </div>
  )
}