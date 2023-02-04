import axios from "axios";
import { useState } from "react";

export default function useHelpful(QAid, helpfulCategory) {
  //to save in local scope
  const category = helpfulCategory;
  const id = QAid;

  const [isHelpful, setIsHelpful] = useState(false);

  var helpfulStyle = { fontWeight: 'bold', color: 'blue' };

  const helpfulQA = () => {
    if (!isHelpful) {
      axios({
        method: 'PUT',
        url: `http://localhost:3000/qa/${category}/${id}/helpful`
      })
        .then((res) => {
          setIsHelpful(true);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
  return [isHelpful, helpfulQA, helpfulStyle];
}