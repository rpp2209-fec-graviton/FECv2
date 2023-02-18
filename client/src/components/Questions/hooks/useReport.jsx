import axios from "axios";
import { useState, useEffect } from "react";

export default function useReport(QAid, reportedCategory) {
  //to save in local scope
  const category = reportedCategory;
  const id = QAid;

  if (window.localStorage.getItem(category) === null) {
    window.localStorage.setItem(category, '{}');
  }

  const [isReported, setIsReported] = useState(false);

  var reportedStyle = { fontWeight: 'bold', color: 'blue' };

  const reportQA = () => {
    if (!isReported) {
      axios({
        method: 'PUT',
        url: `/qa/${category}/${id}/report`
      })
        .then((res) => {
          setIsReported(true);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
  return [isReported, reportQA, reportedStyle];
}