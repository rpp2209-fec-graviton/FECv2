import React from 'react';
import useSlideshow from '../hooks/useSlideshow/useSlideshow.js';
import styles from '../overview.module.css';

function Dots ({ children, type }) {
	const { dots, slideIndex, slideImgs, setURL } = useSlideshow();
	const slides = slideImgs && Object.values(slideImgs);

	const handleClick = (e) => {
		const id = e.target.id;
		setURL(slides[id].children[0].id);
	};

	return (
		slides &&
		<div id={`dot-${type}`} className={`${styles[`dot-${type}`]} ${styles.carousel__dots}`}>
			{slides.map((slide, index) => (<span id={index} key={index} className={styles.dot} onClick={handleClick}></span>))}
			{children}
		</div>
	)

};

export default Dots;