import axios from "axios";
import { useState, useEffect } from "react";

export default function useQuestionsList() {
  const [questionsList, setQuestionsList] = useState([]);

  var updateQList = async (product_id, page) => {
    try {
      setQuestionsList((await axios({
        method: 'GET',
        url: `${window.location.href}qa/questions?product_id=${product_id}&count=14&page=${page}`
      })).data)
    } catch (error) {
      console.log('error from useQuestionsList');
      throw new Error(error);
    }
  }

  return [questionsList, updateQList];
}

/*
function QuestionsView(props) {
  //LOCAL STATES
  const [questionsList, setQuestionsList] = useState([1,2,3,4,5]);
  const [count, setCount] = useState(2);
  const [page, setPage] = useState(1);
  const [moreQ, setMoreQ] = useState(true);

  //GLOBAL STATES - to refactor
  const [product_id, setProduct_id] = useState('71698')

  //HELPER FXNS
  var updateQList = () => {
    fetch(`qa/questions?product_id=${product_id}&page=${page}&count=12`, (err, payload) => {
      if (err) {
        console.log(err);
      } else {
        setQuestionsList(payload.data.results);
        checkIfMoreQ();
      }
    })
  }

  var sortQList = () => {
    return (
      questionsList.sort((a, b) => {
        return b.question_helpfulness - a.question_helpfulness
      })
    )
  }

  var handleClick = () => {
    if (moreQ) {
      showMoreQ();
      updateQList();
    } else {
      setCount(2);
      setMoreQ(true);
    }
  }

  var checkIfMoreQ = () => {
    if (count >= questionsList.length - 2) {
      setMoreQ(false);
    }
  }

  var showMoreQ = () => {
    if (count%4 === 0) {
      setPage(page + 1);
      setCount(count + 2);
    } else {
      setCount(count + 2);
    }
  }

  useEffect(() => {
    updateQList();
    sortQList();
  }, [])

  return (
    <div>
      <h2> Questions and Answers </h2>
      <SearchBar />
      {console.log(questionsList, count, page)}
      {questionsList.slice(0, count).map((q, index) => {
        return (
          <div key={index}>
            <Question q={q} />
            <AnswersView props={q.question_id} />
          </div>
        )
      })}
      <button onClick={handleClick}> {moreQ ? 'More Answered Questions' : 'Collapse Answers'} </button>
      <button> ADD A QUESTION + </button>
    </div>
  )
}

export default QuestionsView;
*/