import React from 'react';
import globalStyles from "../../Home/home.module.css";
import styles from '../overview.module.css';

function Button ({ value, type, handleClick, children }) {
	return (
		<div
			className={`${value === 'add-to-bag' ? styles['add-to-bag'] : ''} ${globalStyles.btn} ${globalStyles['btn-width']} ${styles[type] && styles[type]}`}
			onClick={handleClick}
		>
			{ children }
		</div>
	)
};

export default Button;