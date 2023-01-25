import React, { useState, useEffect } from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import Modal from './Modal.jsx';
import toggleModal from '../overview-utils/modal.js';

function Images ({ selected, styles }) {
	const [show, setShow] = useState(false);


	return (
		<div>
			<h3>Images Component</h3>
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

};

export default Images;