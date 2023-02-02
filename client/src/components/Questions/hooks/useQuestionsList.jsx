import axios from "axios";
import { useState, useEffect } from "react";

export default function useQuestionsList() {
  const [questionsList, setQuestionsList] = useState([]);

  var filterQList = (text) => {
    setQuestionsList([...questionsList.sort((a, b) => {
      return b.question_body.toLowerCase().indexOf(text) - a.question_body.toLowerCase().indexOf(text);
    })])
  };

  var getQList = async (product_id, page) => {
    try {
      setQuestionsList((await axios({
        method: 'GET',
        url: `http://localhost:3000/qa/questions?product_id=${product_id}&count=16&page=${page}`
      })).data)
    } catch (error) {
      console.log('error from useQuestionsList');
      throw new Error(error);
    }
  }

  return [questionsList, getQList, filterQList];
}