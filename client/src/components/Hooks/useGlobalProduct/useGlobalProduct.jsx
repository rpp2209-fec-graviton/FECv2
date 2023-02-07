import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useProductContext } from '../../Context/ContextProvider.jsx';

const useGlobalProduct = () => {
	// Get id from query string
	const productId = useParams();
	const { currentProductId, setCurrentProductId } = useProductContext();

	useEffect(() => {
		if (currentProductId) {
			// Remove trailing slash '/' and set to
			// Global `selected product id` Context
			const id = productId['*'].split('/')[0];
			setCurrentProductId(id);
		}
	}, [productId, currentProductId]);

	return currentProductId;
};

export default useGlobalProduct;