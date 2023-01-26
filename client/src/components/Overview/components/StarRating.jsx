import React from 'react';
import styles from '../overview.module.css';

function StarRating() {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Link to Reviews Component TODO');
	};

	return (
		<div className={styles.stars__outer}>
			<div className={styles.stars__inner}></div>
			<a
				className={styles.stars__a}
				href="#"
				onClick={handleClick}
			>Read all reviews</a>
		</div>
	)
}

export default StarRating;