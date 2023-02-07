import React, { useState, useEffect } from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import Modal from './Modal.jsx';

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

	const handleHover = (e) => {
		const image = document.querySelector('#image-lg');

		if (e._reactName === 'onMouseEnter') {
			image.style.cursor = 'zoom-in';
		}
	};

	// DEBUG TODO: Landscape Image Only Changes Size on SECOND Click/URL Change
	const handleSetImageSize = () => {
		let image = document.getElementById('image-lg');
		console.log('Dimensions', image.naturalWidth, 'x', image.naturalHeight);

		image.naturalWidth > image.naturalHeight ?  image.style.width = '600px' : image.style.width = '400px';
	};

	useEffect(() => {
		imgURL && console.log('Image changed');
		imgURL && handleSetImageSize();
	}, [imgURL]);

	return (
		imgURL &&
		<div className={styles.overview__images}>
			<Modal show={show} setShow={setShow}>
				<img id="modal__content" className={`${styles.modal__content} ${styles['modal-hidden']}`} src={imgURL} alt="modal" />
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