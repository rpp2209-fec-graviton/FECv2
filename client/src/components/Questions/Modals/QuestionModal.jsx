import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

//HOOKS
import { useQuestionsContext } from "../Context/QuestionsProvider.jsx";
import { useProductContext } from "../../Context/ContextProvider.jsx";
import useInput from "../hooks/useInput.jsx";

function QuestionModal({ isShowing, hide, Question }) {

  /*
  Overlays product page titled  “Ask Your Question” and subtitled “About the [Product Name Here]”.  The product name should be inserted into the subtitle.
  Question inputs
  Your Question (mandatory):
  What is your nickname (mandatory)
  Your email (mandatory)
  Submit question (button)
  */

  const [mount, setMount] = useState(false);
  const [productName, setProductName] = useState('');
  const { modalAnchor } = useQuestionsContext();
  const { currentProductId } = useProductContext();
  const yourQuestion = useInput('');
  const nickname = useInput('');
  const yourEmail = useInput('');

  const submitForm = (event) => {
    event.preventDefault();
    axios({
      method: 'Post',
      url: `http://localhost:3000/qa/questions`,
      data: {
        body: yourQuestion.value,
        name: nickname.value,
        email: yourEmail.value,
        product_id: currentProductId
      }
    }).then((res) => {
      console.log('Question', res.data);
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
        <div className="question-modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={submitForm}>
            <h2>Ask Your Question</h2>
            <h3>about the {productName}</h3>
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
            <button type="button">Upload Photo</button>
            <button type="submit">Submit Answer</button>
          </form>
        </div>
      </React.Fragment>, modalAnchor.current
    ) : null
  )
}

export default QuestionModal;
