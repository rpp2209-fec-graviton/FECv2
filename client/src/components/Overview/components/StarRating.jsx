import React from 'react';
import styles from '../overview.module.css';

function StarRating() {
	return (
		<div className={styles.stars__outer}>
			<div className={styles.stars__inner}></div>
		</div>
	)
}

export default StarRating;