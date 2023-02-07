import React from 'react';
import styles from '../overview.module.css';

function Button ({ type, handleClick, children }) {
	return (
		<div
			className={`${styles.button} ${styles[type] && styles[type]}`}
			onClick={handleClick}
		>
			{ children }
		</div>
	)
};

export default Button;