import React, { useState, useEffect } from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import Modal from './Modal.jsx';

import toggleModal from '../overview-utils/modal.js';
import styles from '../overview.module.css';

function Images ({ selected, productStyles }) {

	if (productStyles[selected.id]) {
		const selectedProductStyles = productStyles[selected.id];
		const selectedUrl = selectedProductStyles[0].photos[0].url;
		const selectedThumbnailUrl = selectedProductStyles[0].photos[0].thumbnail_url;

	const [show, setShow] = useState(false);

		return (
			<div>
				<Modal
					toggleModal={()=> toggleModal(setShow)}
					show={show}
					setShow={setShow}
				>
					<img src={selectedThumbnailUrl} />
				</Modal>
				<img
					className={`
						${styles.overview__image}
						${styles['overview-border']}
					`}
					src={selectedUrl}
					onClick={() => toggleModal(setShow)}
				/>
				<ThumbnailCarousel
					selected={selected}
					productStyles={productStyles}
				/>
			</div>
		)
	} else {
		return (<h2>No Images to Display</h2>)
	}

};

export default Images;