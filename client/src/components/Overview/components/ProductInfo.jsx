import React, { useEffect } from 'react';
import Button from './Button.jsx';
import StarRatingBar from '../../StarRatingBar/StarRatingBar.jsx';

import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";
import useFetchProduct from '../../Hooks/useFetchProduct.jsx';
import styles from '../overview.module.css';

function ProductInfo() {
	const { currentProductId } = useProductContext();
	const { response } = useFetchProduct(currentProductId);
	const { price, setPrice, selectedStyle } = useOverviewContext();

	// =============================================
	//                  TO-DO:
	//  Figure out if there's a better way to set
	// price/URL on page load (currently using empty
	// objs & setting in useEffect() calls across App)

	// Wondering if these calls could be moved to a
	//  Context provider and/or custom hook to clean
	//     up individual Component JSX markup
	// =============================================
	useEffect(() => {
		selectedStyle && setPrice(selectedStyle.sale_price ? {price: selectedStyle.sale_price, type: 'sale' } : { price: selectedStyle.original_price, type: 'default' });
	}, [selectedStyle]);

	return (
		response &&
		<div className={styles['product-info__detail']}>
			<StarRatingBar />

			{/* Product Details */}
			<p>{response.category}</p>
			<h2>{response.name}</h2>
			{ (price && price.type === 'sale') ?
				<>
					<span className={`${styles['product-info__sale-price']}`}> ${price.price} </span><span className={`${styles['product-info__default-price']}`}> ${response.default_price} </span>
				</> :
				<p>${price.price}</p>
			}
		</div>
	);
};

export default ProductInfo;