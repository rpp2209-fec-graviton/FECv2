import React, { useState, useEffect } from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import Modal from './Modal.jsx';

import toggleModal from '../overview-utils/modal.js';
import styles from '../overview.module.css';

function Images ({ selected, productStyles }) {
	if (productStyles[selected.id]) {
		const [show, setShow] = useState(false);
		const selectedStyles = productStyles[selected.id];
		const selectedUrl = selectedStyles[0].photos[0].url;
		const selectedThumbnailUrl = selectedStyles[0].photos[0].thumbnail_url;

		return (
			<>
				<Modal toggleModal={()=> toggleModal(show, setShow)} show={show} setShow={setShow}>
					<img
						className={styles.modal__content}
						src={selectedUrl}
						alt="modal"
					/>
				</Modal>

				<img
					id="image-lg"
					alt="full size image"
					className={`${styles.overview__image} ${styles['overview-border']}`}
					src={selectedUrl}
					onClick={() => toggleModal(show, setShow)}
				/>
				<ThumbnailCarousel selected={selected} productStyles={productStyles} />
			</>
		)
	} else {
		return (<h2>No Images to Display</h2>)
	}
};

export default Images;