import React, { useEffect } from 'react';

import { useProductContext } from "../../Context/ContextProvider.jsx";
import useFetchProduct from '../../Hooks/useFetchProduct.jsx';
import styles from '../overview.module.css';

function Description() {
	const { currentProductId } = useProductContext();
	const { response } = useFetchProduct(currentProductId);

	return (
		response &&
		<div className={styles['overview__product-features']}>
			<h2 className={styles['header-nomargin']}>Description</h2>
			<p>{response.description}</p>
		</div>
	);
};

export default Description;