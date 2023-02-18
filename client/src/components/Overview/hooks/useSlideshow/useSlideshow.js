import React, { useState, useEffect } from 'react';

import { useProductContext } from '../../../Context/ContextProvider.jsx';
import { useOverviewContext } from "../../Context/OverviewProvider.jsx";

import useStyles from '../useStyles.jsx';

export default function useSlideshow() {
	const [slideIndex, setSlideIndex] = useState(0);
	const [dots, setDots] = useState([]);

	const { currentProductId } = useProductContext();
	const { selectedStyle, imgURL, setURL } = useOverviewContext();
	const { slideImgs, setSlideImgs } = useStyles(currentProductId);

	// Initialize Slideshow
	useEffect(() => {
		slideIndex && showSlides(slideIndex);
	}, []);

	// Set Dots
	useEffect(() => {
		selectedStyle && setDots(document.getElementsByClassName('dot__Wf2oJ'));
		// selectedStyle && console.log('Dots from useStyles', dots);
	}, [selectedStyle]);

	// =============================================
	//             Slideshow Utilities
	// =============================================
	// Change slide index
	const handleIncrementSlides = (n) => {
		showSlides(slideIndex + n);
	};

	// Display current slide
	const currentSlide = (n) => {
		showSlides(n);
	};

	// Toggle active full-width image
	const showSlides = (n) => {
		let slides = slideImgs && Object.values(slideImgs);
		let length = slideImgs && Object.values(slideImgs).length;
		// slides && console.log('Selected Style', slides);

		// Modulo Example
		// setSlideIndex((currentIndex + 1) % 3);
		if (length) {
			if (n > length - 1 || n === 0) {
				setSlideIndex(0);
				slides[0].children[0] && setURL(slides[0].children[0].id)
			}
			if (n < 0) {
				setSlideIndex(length - 1);
				slides[length - 1].children[0] && setURL(slides[length - 1].children[0].id)
			} else {
				setSlideIndex(n);
				slides[n].children[0] && setURL(slides[n].children[0].id)
			}
		}

	}

	return { slideIndex, slideImgs, setSlideImgs, dots, setDots, currentSlide, handleIncrementSlides, setURL };
};