import React from 'react';
import styles from '../overview.module.css';

function Button ({ handleClick, children }) {
	return (
		<div
			className={styles.button}
			onClick={handleClick}
		>
			{ children }
		</div>
	)
};

export default Button;