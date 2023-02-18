import React from 'react';
import Button from './Button.jsx';

import { toggleModal, zoomModal } from '../overview-utils/modal.js';
import styles from '../overview.module.css';

function Modal ({ show, setShow, children }) {
	return (
		<div
			id="modal"
			className={`${styles.images__modal} ${styles['modal-hidden']} ${styles.flex}`}
			onClick={zoomModal}
		>
			{children}
			{/* <Button type="modal-button" handleClick={() => toggleModal(show, setShow)}>X</Button> */}
		</div>
	)
};

export default Modal;