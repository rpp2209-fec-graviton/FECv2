import React from 'react';
import styles from '../overview.module.css';

function StarRating() {
	return (
		<div className={styles.stars__outer}>
			<div className={styles.stars__inner}></div>
			<a
				className={styles.stars__a}
				href="#reviews"
			>Read all reviews</a>
		</div>
	)
}

export default StarRating;