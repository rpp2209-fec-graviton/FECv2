import axios from "axios";
import { useState, useEffect } from "react";

export default function useQuestionsList() {
  const [questionsList, setQuestionsList] = useState([]);

  var filterQList = (text) => {
    setQuestionsList([...questionsList.sort((a, b) => {
      return b.question_body.toLowerCase().indexOf(text) - a.question_body.toLowerCase().indexOf(text);
    })])
  };

  var getQList = (product_id, page) => {
    axios({
      method: 'GET',
      url: `/qa/questions?product_id=${product_id}&count=16&page=${page}`
    })
      .then((res) => {
        setQuestionsList(res.data);
      })
      .catch((err) => {
        console.log('error from useQuestionsList', err);
        throw new Error ('ERROR in useQuestionsList')
      })

  }

  return [questionsList, getQList, filterQList];
}