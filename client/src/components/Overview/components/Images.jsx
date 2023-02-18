import React, { useState, useEffect } from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import Modal from './Modal.jsx';
import Button from './Button.jsx';

import { toggleModal, zoomModal } from '../overview-utils/modal.js';
import styles from '../overview.module.css';

import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";
import useStyles from '../hooks/useStyles.jsx';

function Images () {
	const [show, setShow] = useState(false);
	const { currentProductId } = useProductContext();
	const {
		imgURL,
		setURL,
		handleSetImgAspectRatio,
		selectedStyle,
		setSelectedStyle,
		currentProductStyles
	} = useOverviewContext();

	const allProductStyles = useStyles(currentProductId);

	// Update the selected style when currentProductStyles changes
	useEffect(() => {
		currentProductStyles && setSelectedStyle(currentProductStyles[0]);
	}, [currentProductStyles]);

	// Update the full size image when the selected style changes
	useEffect(() => {
		selectedStyle.photos && setURL(selectedStyle.photos[0].url);
	}, [selectedStyle]);

	useEffect(() => {
		imgURL &&	handleSetImgAspectRatio();
	}, [imgURL]);

	const handleHover = (e) => {
		const image = document.querySelector('#image-lg');

		if (e._reactName === 'onMouseEnter') {
			image.style.cursor = 'zoom-in';
		}
	};

	return (
		imgURL &&
		<div className={styles.overview__images}>
			<Modal show={show} setShow={setShow}>
				<img id="modal__content" className={`${styles.modal__content} ${styles['modal-hidden']}`} src={imgURL} alt="modal" />
				<Button type="modal-button" handleClick={() => toggleModal(show, setShow)}>X</Button>
			</Modal>

			<img
				id="image-lg"
				className={styles.overview__image}
				src={imgURL}
				onClick={() => toggleModal(show, setShow)}
				onMouseEnter={handleHover}
			/>
			<ThumbnailCarousel type="styles__carousel" />
		</div>
	)

};

export default Images;