import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//HOOKS
import { useQuestionsContext } from "../Context/QuestionsProvider.jsx";
import useInput from "../hooks/useInput.jsx";
import { useProductContext } from "../../Context/ContextProvider.jsx";

/*
  IMPLEMENT uploading photo if time allots
  IMPLEMENT making sure email is valid
*/

function AnswerModal({ isShowing, hide, q, question_id}) {
  //HOOKS
  const [mount, setMount] = useState(false);
  const { modalAnchor } = useQuestionsContext();
  const { currentProductId } = useProductContext();
  const [productName, setProductName] = useState('');
  const yourAnswer = useInput('');
  const nickname = useInput('');
  const yourEmail = useInput('');


  const submitForm = (event) => {
    event.preventDefault();
    axios({
      method: 'Post',
      url: `http://localhost:3000/qa/questions/${question_id}/answers`,
      data: {
        body: yourAnswer.value,
        name: nickname.value,
        email: yourEmail.value,
        photos: []
      }
    }).then((res) => {
      console.log('Answer', res.data);
    })
  };

  useEffect(() => {
    axios({
      method: 'POST',
      url: `http://localhost:3000/products`,
      data: { product_id: currentProductId }
    })
      .then((res) => {
        setProductName(res.data.name)
      })
  }, [])

  return (
    isShowing ? ReactDOM.createPortal(
      <React.Fragment>
        <div className="answer-modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={submitForm}>
            <h2>Submit An Answer!</h2>
            <h3>{productName}: {q.question_body}</h3>
            <label>Answer:&nbsp;
              <textarea id="yourAnswer" placeholder="Type Your Answer..." {...yourAnswer} rows="4" cols="50" maxLength={1000} required={true} />
            </label>
            <label>Nickname:&nbsp;
              <input placeholder="Example: jack543!" {...nickname} required={true} />
            </label>
            <label>Email:&nbsp;
              <input placeholder="Email" {...yourEmail} required={true} />
            </label>
            <button type="button">Upload Photo</button>
            <button type="submit">Submit Answer</button>
          </form>
        </div>
      </React.Fragment>, modalAnchor.current
    ) : null
  )
}

export default AnswerModal;
