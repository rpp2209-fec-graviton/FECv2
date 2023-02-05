import styles from '../overview.module.css';

function toggleModal(show, setShow) {
	setShow && setShow(show => !show);

	// Get elements from DOM
	var fullImage = document.querySelector('#image-lg');
	var modal = document.querySelector('#modal');

	// Toggle Image and Modal Visibility
	modal.classList.toggle(styles['modal-hidden']);
	fullImage.classList.toggle(styles['modal-hidden']);
};

function zoomModal() {
	// Get elements from DOM
	var container = document.getElementById('modal');
	var modal = document.querySelector('#modal__content');

	// Double Click to zoom image
	container.addEventListener('dblclick', (e) => {
		modal.style.transform = "scale(2.5)";
		modal.style.cursor = "crosshair";
	});

	// Move mouse to pan around image
	container.addEventListener('mousemove', (e) => {
		const x = e.clientX - e.target.offsetLeft;
		const y = e.clientY - e.target.offsetTop;

		modal.style.transformOrigin = `${x}px ${y}px`;
	});

	// Click one more time to revert to original image size
	container.addEventListener('click', (e) => {
		modal.style.transform = "scale(1)";
	});

}

export { toggleModal, zoomModal }