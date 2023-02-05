import axios from "axios";
import { useState, useEffect } from "react";

export default function useReport(QAid, reportedCategory) {
  //to save in local scope
  const category = reportedCategory;
  const id = QAid;

  const [isReported, setIsReported] = useState(false);

  var reportedStyle = { fontWeight: 'bold', color: 'blue' };

  const reportQA = () => {
    if (!reportedList[id]) {
      axios({
        method: 'PUT',
        url: `${window.location.origin}/qa/${category}/${id}/report`
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