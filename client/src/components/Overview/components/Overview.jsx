import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductInfo from './ProductInfo.jsx';
import ProductFeatures from './ProductFeatures.jsx';
import Images from './Images.jsx';
import StyleSelector from './StyleSelector.jsx';

import { fetch } from '../../../../../server/utils/data-utils.js';

import styles from '../overview.module.css';
import globalStyles from '../../Home/home.module.css';

function Overview() {
	return (
		<>
			<h2 className={styles.header}>Overview</h2>
			<div className={`${styles.overview} ${styles['grid-template']} ${styles.flex}`}>
			{/* <div className={`${styles.overview} ${styles['grid-template']} ${styles.grid}`}> */}
				<Images />
				<ProductFeatures />

				<div className={`${styles.grid} ${styles['overview__product-info']}`}>
					<StyleSelector />
					<ProductInfo />
				</div>
			</div>
		</>
	);
};

export default Overview;