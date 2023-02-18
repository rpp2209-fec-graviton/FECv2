import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useProductContext } from "../../Context/ContextProvider.jsx";

// COMPONENTS
import Images from './Images.jsx';
import Description from './Description.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductInfo from './ProductInfo.jsx';
import Features from './Features.jsx';

// UTILS
import useFetchProduct from '../../Hooks/useFetchProduct.jsx';
import { fetch } from '../../../../../server/utils/data-utils.js';

// STYLES
import styles from '../overview.module.css';
import globalStyles from '../../Home/home.module.css';

function Overview() {
	const { currentProductId } = useProductContext();
	const { response } = useFetchProduct(currentProductId);

	return (
		response &&
		<>
			<h2 className={styles.header}>Overview</h2>

			<div className={`${styles.overview} ${styles['overview-grid-template']} ${styles.grid}`}>
				{/* Images */}
				<Images />

				{/* Product Details */}
				<Description />

				<div className={`${styles.grid}  ${styles['style-selector-grid-template']} ${styles['overview__product-info']}`}>
					<StyleSelector />
					<ProductInfo />
					<div className={styles['v-bar']}>|</div>
					<Features f={response.features} />
				</div>

			</div>
		</>
	);
};

export default Overview;