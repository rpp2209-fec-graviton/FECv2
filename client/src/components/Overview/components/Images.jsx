import React, { useState, useEffect } from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import Modal from './Modal.jsx';

import toggleModal from '../overview-utils/modal.js';
import styles from '../overview.module.css';

import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";

function Images () {
	// Modal State
	const [show, setShow] = useState(false);

	// Global Context
	const { currentProductId } = useProductContext();

	// Overview Context
	const { pStyles, selectedStyle, setSelectedStyle } = useOverviewContext();
	var url;

	if (pStyles[currentProductId]) {
		// Get First Style's Url
		url = pStyles[currentProductId][0].photos[0].url;

		// Update URL based on currently selected style (set in Thumbnail.jsx)
		pStyles[currentProductId].forEach(style => {
			if (style.style_id === selectedStyle.style_id) {
				url = selectedStyle['photos'][0].url;
			}
		})
	}

	return (
		<div className={styles.overview__images}>
			<Modal toggleModal={()=> toggleModal(show, setShow)} show={show} setShow={setShow}>
				<img
					className={styles.modal__content}
					src={url && url}
					alt="modal"
					id="modal"
				/>
			</Modal>

			<img
				alt="image-lg"
				id="image-lg"
				className={styles.overview__image}
				src={url && url}
				onClick={() => toggleModal(show, setShow)}
			/>
			<ThumbnailCarousel type="styles__carousel" />
		</div>
	)
};

export default Images;