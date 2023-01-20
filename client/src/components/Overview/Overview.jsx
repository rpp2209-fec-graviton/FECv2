import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import Images from './Images.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddtoBag from './AddtoBag.jsx';

function Overview() {
	return (
		<div style={{border: "1px solid purple"}}>
			<h1>Product Overview Widget</h1>
			<Images />
			<ProductInfo />
			<StyleSelector />
			<AddtoBag />
		</div>
	);
};

export default Overview;