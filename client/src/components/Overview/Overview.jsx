import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import Images from './Images.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddtoBag from './AddtoBag.jsx';

function Overview() {
	return (
		<>
			<h1>Product Overview Widget</h1>
			<Images />
			<ProductInfo />
			<ThumbnailCarousel />
			<StyleSelector />
			<AddtoBag />
		</>
	);
};

export default Overview;