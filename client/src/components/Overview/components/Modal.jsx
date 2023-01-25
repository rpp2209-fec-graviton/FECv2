import React from 'react';
import styles from '../overview.module.css';

function Modal ({ show, setShow, toggleModal, children }) {
	if (!show) {
		return (<></>);
	} else {
		return (
			<div
				className={`${styles.modal}
				${styles["modal-hidden"]} `}
				onClick={() => toggleModal(setShow)}
			>
				{children}
				<button>X</button>
			</div>
		)
	}
};

export default Modal;