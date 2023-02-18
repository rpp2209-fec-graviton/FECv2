import React from 'react';
import useSlideshow from '../hooks/useSlideshow/useSlideshow.js';
import styles from '../overview.module.css';

function Dots () {
	const { dots, slideIndex, slideImgs, setURL } = useSlideshow();
	const slides = slideImgs && Object.values(slideImgs);

	const handleClick = (e) => {
		console.log(e.target.id);
		const id = e.target.id;
		setURL(slides[id].children[0].id);
	};

	return (
		slides &&
		<div className={styles.carousel__dots}>
			{slides.map((slide, index) => (<span id={index} key={index} className={styles.dot} onClick={handleClick}></span>))}
		</div>
	)

};

export default Dots;