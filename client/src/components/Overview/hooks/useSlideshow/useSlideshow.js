import React, { useState, useEffect } from 'react';

import { useProductContext } from '../../../Context/ContextProvider.jsx';
import { useOverviewContext } from "../../Context/OverviewProvider.jsx";

import useStyles from '../useStyles.jsx';

// =============================================
//                  TO-DO:
//  Can't asynchronously fetch and set Slides
//             (Debug To-Do)
// =============================================
export default function useSlideshow() {
	const [slideIndex, setSlideIndex] = useState(1);
	const [dots, setDots] = useState([]);

	const { currentProductId } = useProductContext();
	const { selectedStyle, setURL } = useOverviewContext();
	const { slideImgs, setSlideImgs } = useStyles(currentProductId);

	// Initialize Slideshow
	useEffect(() => {
		slideIndex && showSlides(slideIndex);
	}, []);

	// Set Dots
	useEffect(() => {
		selectedStyle && setDots(document.getElementsByClassName('dot__Wf2oJ'));
		selectedStyle && console.log('Dots from useStyles', dots);
	}, [selectedStyle]);

	// Slide Logger
	// useEffect(() => {
	// 	slideImgs && console.log('Image Slides', slideImgs);
	// }, [slideImgs]);

	// =============================================
	//             Slideshow Utilities
	// =============================================
	// Change slide index
	const handleIncrementSlides = (n) => {
		console.log('in handleIncrementSlides');
		showSlides(setSlideIndex(slideIndex + n));
	};

	// Display current slide
	const currentSlide = (n) => {
		console.log('in current slides', slideImgs);
		showSlides(setSlideIndex(n));
	};

	// Toggle active full-width image
	const showSlides = (n) => {
		let slides = slideImgs && Object.values(slideImgs);
		let length = slideImgs && Object.values(slideImgs).length;
		// slides && console.log('Selected Style', slides);

		if (length) {
			if (n > length) {
				setSlideIndex(1);
			}
			if (n < 1) {
				setSlideIndex(length);
			}

			// for (let i = 0; i < length; i++) {
			// 	console.log('slide index', slides[i]);
			// 	slides[i].style.display = "none";
			// }

			for (let i = 0; i < dots.length; i++) {
				// console.log('dot index', slides[i].children[0].id);

				setURL(slides[i].children[0].id);
				dots[i].className = dots[i].className.replace(" active", "");
			}

			slides[slideIndex - 1].style.display = "block";
			dots[slideIndex - 1].className += " active";
		}

	}

	return { slideImgs, setSlideImgs, dots, setDots, currentSlide, handleIncrementSlides };
};