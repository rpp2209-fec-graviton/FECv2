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

function AnswerModal({ isShowing, hide, q, question_id }) {
  //HOOKS
  const [mount, setMount] = useState(false);
  const { modalAnchor, product_id } = useQuestionsContext();
  const [productName, setProductName] = useState('');
  const yourAnswer = useInput('');
  const nickname = useInput('');
  const yourEmail = useInput('');
  const [photos, setPhotos] = useState();


  const submitForm = (event) => {
    event.preventDefault();
    if (yourEmail.value.indexOf('@') === -1 && yourEmail.value.indexOf('.') === -1) {
      alert('You must enter the following: \nCorrect Email Format (____@___.com)')
    } else if (nickname.value.length <= 3) {
      alert('You must enter the following:\nValid Nickname')
    } else if (yourAnswer.value.length <= 3) {
      alert('You must enter the following:\nValid Answer')
    } else {
      const formData = new FormData();
      formData.append('photos', photos);
      formData.append('body', yourAnswer.value);
      formData.append('name', nickname.value);
      formData.append('email', yourEmail.value);

      axios.post(`/qa/questions/${question_id}/answers`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then((res) => {
        console.log('Answer', res.data);
        yourEmail.reset.thevalue();
        nickname.reset.thevalue();
        yourAnswer.reset.thevalue();
        setPhotos([]);
        hide();
      })
    }
  };

  useEffect(() => {
    axios({
      method: 'POST',
      url: `/products`,
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
                <sub>For privacy reasons, do not use your full name or email address</sub>
              </label>
              <label>Email:&nbsp;
                <input placeholder="Example: jack@email.com" {...yourEmail} required={true} />
                <sub>For authentication reasons, you will not be emailed</sub>
              </label>
              <input type="file" accept="image/*" onChange={(e) => {setPhotos(e.target.files[0])}} name='photos'/>
              <button type="submit">Submit Answer</button>
            </form>
          </div>
        </div>
      </React.Fragment>, modalAnchor.current
    ) : null
  )
}

export default AnswerModal;
