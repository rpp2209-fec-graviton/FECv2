import React, { useState, useEffect } from "react";
import Question from "./Question.jsx";
import AnswersView from "./AnswersView.jsx";
import SearchBar from "./SearchBar";
import QuestionModal from "./QuestionModal";
import AnswerModal from "./AnswerModal"

function QuestionsView(props) {
  const [questionsList, setQuestionsList] = useState([]);
  /*Implementation tasks
    1. Houses Individual Questions Component (2 by deafult)
    2. Houses Search Bar Component
    3. Expands 2 Questions at a time and Scrollable
    4. Sorts questions By helpfulness
    5. Create a "More Answered Questions" button
    6. Create a "Add Quest +" button
    7. Confined to a single page, any longer should be scrollable
  */
}

export default QuestionsView;