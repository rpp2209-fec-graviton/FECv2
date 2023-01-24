import React, { useState, useEffect } from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import Modal from './Modal.jsx';

function Images () {
	const [show, setShow] = useState(false);

	useEffect(() => {
		console.log('modal state changed to:', show);
	}, [show]);

	const toggleModal = () => {
		console.log('modal before', show);
		setShow(show => !show);
	};

	return (
		<div>
			<h3>Images Component</h3>
			<Modal toggleModal={toggleModal} show={show} />
			<ThumbnailCarousel />
		</div>
	)
};

export default Images;