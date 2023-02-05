import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//HOOKS
import { useQuestionsContext } from "../Context/QuestionsProvider.jsx";
import useInput from "../hooks/useInput.jsx";

//CSS
import styles from "../questions.module.css";

/*
  IMPLEMENT uploading photo if time allots
  IMPLEMENT making sure email is valid
*/

function AnswerModal({ isShowing, hide, q, question_id}) {
  //HOOKS
  const [mount, setMount] = useState(false);
  const { modalAnchor, product_id } = useQuestionsContext();
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
      url: `${window.location.origin}/products`,
      data: { product_id }
    })
      .then((res) => {
        setProductName(res.data.name)
      })
  }, [])

  return (
    isShowing ? ReactDOM.createPortal(
      <React.Fragment>
        <div className={styles.modal}>
          <div className={styles.modal__wrapper}>
            <button type="button" className={styles.modal__closeBtn} onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          <form className={styles.modal__form} onSubmit={submitForm}>
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
        </div>
      </React.Fragment>, modalAnchor.current
    ) : null
  )
}

export default AnswerModal;
