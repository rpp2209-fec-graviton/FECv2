import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

//HOOKS
import { useQuestionsContext } from "../Context/QuestionsProvider.jsx";
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
  const { modalAnchor } = useQuestionsContext();
  const yourQuestion = useInput('');
  const nickname = useInput('');
  const yourEmail = useInput('');

  const submitForm = (event) => {
    event.preventDefault();
    console.log('Implement submit', yourEmail.value, yourQuestion.value, nickname.value);
  };

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
            <title>Ask Your Question</title>
            <sub>About the [INSERT PRODUCT NAME HERE]</sub>
            <textarea id="yourQuestion" placeholder="Question..." {...yourQuestion} rows="4" cols="50" maxLength={1000} required={true} />
            <input placeholder="Example: jack543!" {...nickname} required={true} />
            <input placeholder="Email" {...yourEmail} required={true} />
            <button type="button">Upload Photo</button>
            <button type="submit">Submit Answer</button>
          </form>
        </div>
      </React.Fragment>, modalAnchor.current
    ) : null
  )
}

export default QuestionModal;
