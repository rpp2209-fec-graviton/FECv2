import React, { useState, useEffect } from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import Modal from './Modal.jsx';

import toggleModal from '../overview-utils/modal.js';
import styles from '../overview.module.css';

function Images ({ selected, setSelected, productStyles }) {
	if (productStyles[selected.id]) {
		const [show, setShow] = useState(false);
		const selectedStyles = productStyles[selected.id];
		const selectedUrl = selectedStyles[0].photos[0].url;
		// const test = selected.photos[0].url;
		// console.log('url', test);
		const selectedThumbnailUrl = selectedStyles[0].photos[0].thumbnail_url;

		return (
			<div className={styles.overview__images}>
				<Modal toggleModal={()=> toggleModal(show, setShow)} show={show} setShow={setShow}>
					<img
						className={styles.modal__content}
						src={selectedUrl}
						alt="modal"
					/>
				</Modal>

				<img
					id="image-lg"
					className={styles.overview__image}
					src={selectedUrl}
					onClick={() => toggleModal(show, setShow)}
				/>
				<ThumbnailCarousel type="styles__carousel" setSelected={setSelected} selected={selected} productStyles={productStyles} />
			</div>
		)
	} else {
		return (<h2>No Images to Display</h2>)
	}
};

export default Images;