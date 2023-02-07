import axios from "axios";
import { useState, useEffect } from "react";

export default function useReport(QAid, reportedCategory) {
  //to save in local scope
  const category = reportedCategory;
  const id = QAid;

  if (window.localStorage.getItem(category) === null) {
    window.localStorage.setItem(category, '{}');
  }

  const localStorage = JSON.parse(window.localStorage.getItem(category));

  const [reportedList, setReportedList] = useState(localStorage);
  const [isReported, setIsReported] = useState(localStorage[id]);

  var reportedStyle = { fontWeight: 'bold', color: 'blue' };

  const reportQA = () => {
    if (!reportedList[id]) {
      axios({
        method: 'PUT',
        url: `http://localhost:3000/qa/${category}/${id}/report`
      })
        .then((res) => {
          setReportedList({ ...reportedList, [id]: true });
          setIsReported(true);
          window.localStorage.setItem(category, JSON.stringify(reportedList));
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
  return [isReported, reportQA, reportedStyle];
}