import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import Images from './Images.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddtoBag from './AddtoBag.jsx';

import styles from '../overview.module.css';

function Overview() {
	return (
		<div className={styles.greyBorder}>
			<h1>Product Overview Widget</h1>
			<Images />
			<ProductInfo />
			<StyleSelector />
			<AddtoBag />
		</div>
	);
};

export default Overview;