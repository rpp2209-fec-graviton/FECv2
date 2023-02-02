import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

//HOOKS
import { useQuestionsContext } from "../Context/QuestionsProvider.jsx";
import useInput from "../hooks/useInput.jsx";

function AnswerModal({ isShowing, hide, Question }) {

  /*
    IMPLEMENT SUBMITING FORM
    IMPLEMENT UPLOADING PHOTO
  */

  const [mount, setMount] = useState(false);
  const { modalAnchor } = useQuestionsContext();
  const yourAnswer = useInput('');
  const nickname = useInput('');
  const yourEmail = useInput('');

  const submitForm = (event) => {
    event.preventDefault();
    console.log('Implement submit', yourEmail.value, yourAnswer.value, nickname.value);
};

  return (
    isShowing ? ReactDOM.createPortal(
      <React.Fragment>
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={submitForm}>
            <title>Submit An Answer!</title>
            <textarea id="yourAnswer" placeholder="Answer..." {...yourAnswer} rows="4" cols="50" maxLength={1000} required={true} />
            <input placeholder="Example: jack543!" {...nickname} required={true}/>
            <input placeholder="Email" {...yourEmail} required={true}/>
            <button type="button">Upload Photo</button>
            <button type="submit">Submit Answer</button>
        </form>
        </div>
      </React.Fragment>, modalAnchor.current
    ) : null
  )
}

export default AnswerModal;
