import React from 'react';
import styles from '../overview.module.css';

function Modal ({ show, toggleModal }) {
	if (!show) {
		return (<button onClick={toggleModal}>Show Modal</button>);
	} else {
		return (
			<div className={`${styles.modal} ${styles["modal-hidden"]} `}>
				<h3>Modal (Image Overlay) Component</h3>
				<button onClick={toggleModal}>X Close</button>
			</div>
		)
	}
};

export default Modal;