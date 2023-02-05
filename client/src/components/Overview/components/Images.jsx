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

	useEffect(() => {
		currentProductStyles && setSelectedStyle(currentProductStyles[0]);
	}, [allProductStyles]);

	useEffect(() => {
		selectedStyle.photos && setURL(selectedStyle.photos[0].url);
	}, [selectedStyle]);

	return (
		imgURL &&
		<div className={styles.overview__images}>
			<Modal show={show} setShow={setShow}>
				<img id="modal__content" className={styles.modal__content} src={imgURL} alt="modal-content" />
			</Modal>

			<img id="image-lg" className={styles.overview__image} src={imgURL} onClick={() => toggleModal(show, setShow)}/>
			<ThumbnailCarousel type="styles__carousel" />
		</div>
	)

};

export default Images;