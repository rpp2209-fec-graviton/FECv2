import styles from '../overview.module.css';

function toggleModal(show, setShow) {
	setShow && setShow(show => !show);
	var fullImage = document.querySelector('#image-lg');
	var modal = document.querySelector('#modal');

	modal.classList.toggle(styles['modal-hidden']);
	fullImage.classList.toggle(styles['modal-hidden']);
};

function zoomModal() {
	var container = document.getElementById('modal');
	var modal = document.querySelector('#modal__content');

	container.addEventListener('mousemove', (e) => {
		const x = e.clientX - e.target.offsetLeft;
		const y = e.clientY - e.target.offsetTop;

		// console.log(x, y);
	});
}

export { toggleModal, zoomModal }