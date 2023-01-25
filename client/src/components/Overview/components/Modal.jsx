import React from 'react';
import styles from '../overview.module.css';

function Modal ({ show, setShow, toggleModal, children }) {
	if (!show) {
		return (<button onClick={() => toggleModal(setShow)}>Show Modal</button>);
	} else {
		return (
			<div className={`${styles.modal} ${styles["modal-hidden"]} `}>
				<h3>Modal (Image Overlay) Component</h3>
				{children}
				<button onClick={() => toggleModal(setShow)}>X Close</button>
			</div>
		)
	}
};

export default Modal;