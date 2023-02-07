import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductInfo from './ProductInfo.jsx';
import Images from './Images.jsx';
import StyleSelector from './StyleSelector.jsx';

import { fetch } from '../../../../../server/utils/data-utils.js';
import styles from '../overview.module.css';

function Overview() {
	return (
		<div className={`${styles.overview} ${styles['grid-template']} ${styles.grid}`}>
			<Images />
			<div className={`${styles.grid} ${styles['overview__product-info']}`}>
				<StyleSelector />
				<ProductInfo />
			</div>
		</div>
	);
};

export default Overview;