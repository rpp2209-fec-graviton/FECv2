import React from 'react';
import Button from './Button.jsx';
import StarRating from './StarRating.jsx';
import { useOverviewContext } from "../Context/OverviewProvider.jsx";

import styles from '../overview.module.css';

// =============================================
//          TO-DO: Sale Price Styling
// =============================================
function ProductInfo() {
	const { product } = useOverviewContext();

	return (
		<div className={styles['overview__product-info']}>
			<StarRating />
			<p>{product.category}</p>
			<h2>{product.name}</h2>
			<p>${product.default_price}</p>
			<p>{product.description}</p>
		</div>
	);
};

export default ProductInfo;