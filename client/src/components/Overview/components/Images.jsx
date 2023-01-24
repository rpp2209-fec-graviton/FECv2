import React from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import Modal from './Modal.jsx';

function Images () {

	const showModal = () => {
		console.log('showing modal msg');
	};

	return (
		<div>
			<h3>Images Component</h3>
			<Modal show={showModal} />
			<ThumbnailCarousel />
		</div>
	)
};

export default Images;