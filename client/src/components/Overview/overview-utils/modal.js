import styles from '../overview.module.css';

export default function toggleModal(show, setShow) {
	setShow(show => !show);
	var fullImage = document.querySelector('#image-lg');
	var modal = document.querySelector('#modal');
	console.log('Modal', modal);

	modal.classList.toggle(styles['modal-hidden']);
	fullImage.classList.toggle(styles['modal-hidden']);
	modal.classList.toggle(styles['modal-lg']);
};