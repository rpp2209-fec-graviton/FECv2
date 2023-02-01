import React, { useState } from "react";
import axios from "axios";

export default function useAnswersList() {
  const [answersList, setAnswersList] = useState([]);

  var getAList = async (question_id, page) => {
    try {
      setAnswersList((await axios({
        method: 'GET',
        url: `${window.location.href}qa/questions/${question_id}/answers?count=16&page=${page}`
      })).data)
    } catch (error) {
      console.log('error from useAnswersList');
      throw new Error(error);
    }
  }

  return [answersList, getAList];
};