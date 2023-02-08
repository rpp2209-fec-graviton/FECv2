import React, { useState } from "react";
import axios from "axios";

export default function useAnswersList() {
  const [answersList, setAnswersList] = useState([]);

  const sortAList = (aList) => {
    return aList.sort((a, b) => {
      return b.answerer_name.toLowerCase().indexOf('sellar') - a.answerer_name.toLowerCase().indexOf('sellar');
    })
  }

  var getAList = async (question_id, page) => {
    try {
      var result = (await axios({
        method: 'GET',
        url: `${window.location.origin}/qa/questions/${question_id}/answers?count=16&page=${page}`
      })).data;
      setAnswersList(sortAList(result));
    } catch (error) {
      console.log('error from useAnswersList', error);
      throw error;
    }
  }

  return [answersList, getAList];
};