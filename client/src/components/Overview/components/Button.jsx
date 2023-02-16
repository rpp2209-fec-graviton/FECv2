import React from 'react';
import globalStyles from "../../Home/home.module.css";
import styles from '../overview.module.css';

function Button ({ type, handleClick, children }) {
	return (
		<div
			className={`${globalStyles.btn} ${styles[type] && styles[type]}`}
			onClick={handleClick}
		>
			{ children }
		</div>
	)
};

export default Button;