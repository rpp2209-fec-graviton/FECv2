import React, { useState, useEffect } from 'react';

import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import Modal from './Modal.jsx';
import Dots from './Dots.jsx';
import Button from './Button.jsx';

import { toggleModal, zoomModal } from '../overview-utils/modal.js';
import styles from '../overview.module.css';

import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";
import useStyles from '../hooks/useStyles.jsx';
import useSlideshow from '../hooks/useSlideshow/useSlideshow.js';

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

	const { allProductStyles } = useStyles(currentProductId);
	const { slideImgs, setSlideImgs, dots, setDots, handleIncrementSlides } = useSlideshow();

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

			<div className="slideshow">

				{/* Full Width Image */}
				<img
					id="image-lg"
					className={styles.overview__image}
					src={imgURL}
					onClick={() => toggleModal(show, setShow)}
					onMouseEnter={handleHover}
				/>

				{/* Styles Image Carousel */}
				<ThumbnailCarousel id="styles__carousel" type="styles__carousel" />

				{/* Image Dots/Sliders/Arrows  */}
				<div className={styles['dot-arrow-parent']}>
					<a
						href="#"
						className={`fas fa-angle-left ${styles.prev} ${styles.border}`}
						role="button"
						onClick={() => handleIncrementSlides(-1)}
					></a>

					{/* Interactive Carousel Dots */}
					<Dots></Dots>

					<a
						href="#"
						className={`fas fa-angle-right ${styles.nxt} ${styles.border}`}
						role="button"
						onClick={() => handleIncrementSlides(1)}
					></a>
				</div>



			</div>

		</div>
	)

};

export default Images;