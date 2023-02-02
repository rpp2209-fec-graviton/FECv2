import React, { useRef } from "react";
import QuestionsList from './QuestionsList/QuestionsList.jsx';
import SearchBar from './QuestionsList/SearchBar.jsx';
import { useQuestionsContext } from './Context/QuestionsProvider.jsx';

export default function QuestionsView() {
  const { modalAnchor } = useQuestionsContext();

  return (
    <div className="questions" ref={modalAnchor}>
      <h2> Questions and Answers </h2>
      <QuestionsList />
    </div>
  )
}