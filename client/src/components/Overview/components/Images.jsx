import React, { useState, useEffect } from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import Modal from './Modal.jsx';

import toggleModal from '../overview-utils/modal.js';
import imageStyles from '../overview.module.css';

function Images ({ selected, styles }) {

	if (styles[selected.id]) {
		const selectedProductStyles = styles[selected.id];
		const selectedUrl = selectedProductStyles[0].photos[0].url;

	const [show, setShow] = useState(false);

		return (
			<div>
				<img
					className={`
						${imageStyles.overview__image}
						${imageStyles['overview-border']}
					`}
					src={selectedUrl}
					onClick={() => toggleModal(setShow)}
				/>
			<Modal
				toggleModal={()=> toggleModal(setShow)}
				show={show}
				setShow={setShow}
			>
				<h3>This is a modal child</h3>
			</Modal>
				<ThumbnailCarousel
					selected={selected}
					styles={styles}
				/>
			</div>
		)
	} else {
		return (<h2>No Images to Display</h2>)
	}

};

export default Images;