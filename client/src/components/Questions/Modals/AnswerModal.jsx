import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useQuestionsContext } from "../Context/QuestionsProvider.jsx";

function AnswerModal({ isShowing, hide }) {

  const [mount, setMount] = useState(false);
  const { modalAnchor } = useQuestionsContext();


  return (
    isShowing ? ReactDOM.createPortal(
      <React.Fragment>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className="modal">
            <div className="modal-header">
              <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
              Submit A question
            </div>
            <p>
              Hello, I'm a modal.
            </p>
          </div>
        </div>
      </React.Fragment>, modalAnchor.current
    ) : null
  )
}

export default AnswerModal;
