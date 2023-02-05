import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductInfo from './ProductInfo.jsx';
import Images from './Images.jsx';
import StyleSelector from './StyleSelector.jsx';
import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";

import { fetch } from '../../../../../server/utils/fetch.js';
import styles from '../overview.module.css';

function Overview() {
	// Global Context
	const { currentProductId, ratingsAverage } = useProductContext();

	// Overview Context
	const { product, setProduct, allProductStyles, selectedStyle	} = useOverviewContext();

	return (
		currentProductId &&
		<div className={`${styles.overview} ${styles.grid}`}>
			<Images />
			<StyleSelector />
			{/* <ProductInfo /> */}
		</div>
	);
};

export default Overview;