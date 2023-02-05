import React, { useState, useEffect } from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import Modal from './Modal.jsx';

import toggleModal from '../overview-utils/modal.js';
import styles from '../overview.module.css';

import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";

function Images () {
	const [show, setShow] = useState(false);
	const { currentProductId } = useProductContext();
	const { imgURL, setURL, selectedStyle, currentProductStyles, allProductStyles } = useOverviewContext();

	useEffect(() => {
		if (selectedStyle.photos) {
			setURL(selectedStyle.photos[0].url);
		}
	}, [selectedStyle]);

	return (
		imgURL &&
		<div className={styles.overview__images}>
			<Modal toggleModal={()=> toggleModal(show, setShow)} show={show} setShow={setShow}>
				<img className={styles.modal__content} src={imgURL} alt="modal" />
			</Modal>

			<img id="image-lg" className={styles.overview__image} src={imgURL} onClick={() => toggleModal(show, setShow)}/>
			<ThumbnailCarousel type="styles__carousel" />
		</div>
	)

};

export default Images;