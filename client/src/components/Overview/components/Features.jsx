import React from 'react';
import styles from '../overview.module.css';

function Features ({ f }) {
	return (
		<div className={`${styles.features} ${styles.flex} ${styles.border}`}>
			<h2 className={styles['header-nomargin']}>Product Features</h2>
			{f && f.map((feat, index) => (<p key={index}>{feat.feature} | {feat.value}</p>))}
		</div>
	)

};

export default Features;