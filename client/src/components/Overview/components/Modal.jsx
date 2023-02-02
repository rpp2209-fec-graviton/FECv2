import React from 'react';
import styles from '../overview.module.css';

function Modal ({ show, setShow, toggleModal, children }) {
	return (
		<div
			className={`${styles.images__modal} ${styles['modal-hidden']}`}
			onClick={() => toggleModal(show, setShow)}
		>
			{children}
			<button>X</button>
		</div>
	)
};

export default Modal;