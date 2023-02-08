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
    axios({
      method: 'Post',
      url: `${window.location.origin}/qa/questions`,
      data: {
        body: yourQuestion.value,
        name: nickname.value,
        email: yourEmail.value,
        product_id
      }
    }).then((res) => {
      console.log('Question', res.data);
    })
  };

  const getProductName = () => {
    axios({
      method: 'POST',
      url: `${window.location.origin}/products`,
      data: { product_id }
    })
      .then((res) => {
        setProductName(res.data.name);
        console.log(productName, 'in then call', res.data.name);
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
                <input placeholder="Example: jack543!" {...nickname} required={true} />
              </label>
              <label>
                Email:&nbsp;
                <input placeholder="Email" {...yourEmail} required={true} />
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
