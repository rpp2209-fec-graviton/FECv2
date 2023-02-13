import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import styles from "../questions.module.css";

//HOOKS
import { useQuestionsContext } from "../Context/QuestionsProvider.jsx";
import useInput from "../hooks/useInput.jsx";

function QuestionModal({ isShowing, hide, Question }) {

  const [mount, setMount] = useState(false);
  const [productName, setProductName] = useState('');
  const { modalAnchor, product_id } = useQuestionsContext();
  const yourQuestion = useInput('');
  const nickname = useInput('');
  const yourEmail = useInput('');

  const submitForm = (event) => {
    event.preventDefault();
    if (yourEmail.value.indexOf('@') === -1 && yourEmail.value.indexOf('.') === -1) {
      alert('You must enter the following: \nCorrect Email Format (____@___.com)')
    } else if (nickname.value.length <= 3) {
      alert('You must enter the following:\nValid Nickname')
    } else if (yourQuestion.value.length <= 3) {
      alert('You must enter the following:\nValid Question')
    } else {
      axios({
        method: 'Post',
        url: `${window.location.origin}/qa/questions`,
        data: {
          body: yourQuestion.value,
          name: nickname.value,
          email: yourEmail.value,
          product_id: Number(product_id)
        }
      }).then((res) => {
        console.log('Question', res.data);
        yourQuestion.reset.thevalue();
        nickname.reset.thevalue();
        yourEmail.reset.thevalue();
        hide();
      })
    }
  };

  const getProductName = () => {
    axios({
      method: 'POST',
      url: `/products`,
      data: { product_id }
    })
      .then((res) => {
        setProductName(res.data.name);
      })
      .catch((err) => {
        throw err;
      })
  };

  useEffect(() => {
    getProductName();
  }, [product_id])

  return (
    isShowing ? ReactDOM.createPortal(
      <React.Fragment>
        <div className={styles.modal}>
          <div className={styles.modal__wrapper}>
            <>
              <button type="button" className={styles.modal__closeBtn} onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h2>Ask Your Question...</h2>
              <h3>about the {productName}</h3>
            </>
            <form className={styles.modal__form} onSubmit={submitForm}>
              <label>
                Question:&nbsp;
                <textarea placeholder="Type Your Question..." {...yourQuestion} rows="2" cols="25" maxLength={1000} required={true} />
              </label>
              <label>
                Nickname:&nbsp;
                <input placeholder="Example: jackson11!" {...nickname} required={true} />
                <sub>For privacy reasons, do not use your full name or email address</sub>
              </label>
              <label>
                Email:&nbsp;
                <input placeholder="Email@email.com" {...yourEmail} required={true} />
                <sub>For authentication reasons, you will not be emailed</sub>
              </label>
              <button type="submit">Submit Answer</button>
            </form>
          </div>
        </div>
      </React.Fragment>, modalAnchor.current
    ) : null
  )
}

export default QuestionModal;
