import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import { useProductContext } from "../../Context/ContextProvider.jsx";
import styles from '../overview.module.css';

function ThumbnailCarousel({ type, selected, setSelected, productStyles }) {
	const { products, currentProductId, setCurrentProductId } = useProductContext();

	if (productStyles[currentProductId]) {
		const carousel = productStyles[currentProductId].map(style => (
			<Thumbnail
				carouselType={type}
				type={type === 'styles__carousel' ? 'thumbnail-square' : 'thumbnail-rounded'}
				key={style.style_id}
				photos={style.photos}
				style={style}
				setSelected={setSelected}
			/>));

		return (
			<div className={`${styles[type]} ${styles.carousel}`}>
				{carousel}
				{/* {stylesCarousel} */}
				{/* {type === 'styles__carousel' ? stylesCarousel : productCarousel} */}
			</div>
		)
	} else {
		return (
			<h3>No Styles to Pass to TN</h3>
		)
	}

};

export default ThumbnailCarousel;