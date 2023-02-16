import React from 'react';
import globalStyles from "../../Home/home.module.css";
import styles from '../overview.module.css';

function Button ({ value, type, handleClick, children }) {
	return (
		<div
			className={`${value === 'add-to-bag' ? styles['add-to-bag'] : null} ${globalStyles.btn} ${styles[type] && styles[type]}`}
			onClick={handleClick}
		>
			{ children }
		</div>
	)
};

export default Button;