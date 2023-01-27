import SampleData from "../../../../../../ExampleData/index.js";
import axios from "axios";
import { useState, useEffect } from "react";

export default function useQuestionsList() {
  const [questionsList, setQuestionsList] = useState(SampleData['/qa/questions'].results);

  var updateQList = async (product_id, page) => {
    try {
      setQuestionsList((await axios({
        method: 'GET',
        url: `http://localhost:3000/qa/questions?product_id=${product_id}&count=12&page=${page}`
      })).data)
    } catch (error) {
      console.log('error from useQuestionsList');
      throw new Error(error);
    }
  }

  return [questionsList, updateQList];
}