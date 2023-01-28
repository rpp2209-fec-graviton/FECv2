import React from "react";
import QuestionsList from './QuestionsList/QuestionsList.jsx';
import SearchBar from './QuestionsList/SearchBar.jsx';

export default function QuestionsView () {
  return (
    <div>
      <h2> Questions and Answers </h2>
      <QuestionsList/>
      <button> MORE ANSWERED QUESTIONS </button>
      <button> ADD A QUESTION + </button>
    </div>
  )
}