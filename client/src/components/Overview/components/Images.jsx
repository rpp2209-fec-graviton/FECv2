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

	if (pStyles[currentProductId]) {
		// Get First Style's Url
		let url = pStyles[currentProductId][0].photos[0].url;

		// Update URL based on currently selected style (set in Thumbnail.jsx)
		pStyles[currentProductId].forEach(style => {
			if (style.style_id === selectedStyle.style_id) {
				url = selectedStyle['photos'][0].url;
			}
		})

		return (
			pStyles[currentProductId] &&
			<div className={styles.overview__images}>
				<Modal toggleModal={()=> toggleModal(show, setShow)} show={show} setShow={setShow}>
					<img className={styles.modal__content} src={url} alt="modal" />
				</Modal>

				<img id="image-lg" className={styles.overview__image} src={url} onClick={() => toggleModal(show, setShow)}/>
				<ThumbnailCarousel type="styles__carousel" />
			</div>
		)
	} else {
		return (<h2>No Images to Display</h2>)
	}
};

export default Images;