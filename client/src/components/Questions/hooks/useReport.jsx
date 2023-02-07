import axios from "axios";
import { useState, useEffect } from "react";

export default function useReport(QAid, reportedCategory) {
  //to save in local scope
  const category = reportedCategory;
  const id = QAid;

  const [isReported, setIsReported] = useState(false);

  const reportQA = () => {
    if (!reportedList[id]) {
      axios({
        method: 'PUT',
        url: `http://localhost:3000/qa/${category}/${id}/report`
      })
        .then((res) => {
          setIsReported(true);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
  return [isReported, reportQA];
}