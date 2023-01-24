import React from 'react';
import styles from '../overview.module.css';

function Thumbnail({ product }) {
	console.log('product from TN', product);

	return (
		<>
			{/* <h3>{!product ? null : product.name}</h3> */}
			<img className={styles.overview__image} src="assets/mockup.png" alt="tee-mockup" />
		</>
	);
};

export default Thumbnail;