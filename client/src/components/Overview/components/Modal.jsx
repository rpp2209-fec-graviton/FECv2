import React from 'react';
import styles from '../overview.module.css';

function Modal ({ show }) {
	return (
		<div className={`${styles.modal} ${styles["modal-hidden"]} `}>
			<h3>Modal (Image Overlay) Component</h3>
			<button onClick={show}>Show Modal</button>
			{/* <button>X Close</button> */}
		</div>
	)
};

export default Modal;