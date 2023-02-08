import React, { useState, useEffect } from 'react';

import useRatingsAvg from '../../Hooks/useRatingsAvg/useRatingsAvg.jsx';
import { useProductContext } from "../../Context/ContextProvider.jsx";

import styles from '../overview.module.css';

// =============================================
//                Debug To-Do
//  Fix count still renders even if 0 reviews
// =============================================
function ReviewsLink({ reviewCount }) {
	return (
		<a className={styles.stars__a} href="#reviews">Read all {reviewCount} reviews</a>
	)
}

export default ReviewsLink;