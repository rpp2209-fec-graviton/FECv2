import React from 'react';
import useSlideshow from '../hooks/useSlideshow/useSlideshow.js';
import styles from '../overview.module.css';

function Dots () {
	const { slideImgs, currentSlide } = useSlideshow();
	const slides = slideImgs && Object.values(slideImgs);

	console.log('Slide Count', slides);

	const handleClick = (e) => {
		console.log(e.target);
	};

	return (
		slides &&
		<div className={styles.carousel__dots}>
			{slides.map(slide => (<span className={styles.dot} onClick={handleClick}></span>))}
		</div>
	)

};

export default Dots;