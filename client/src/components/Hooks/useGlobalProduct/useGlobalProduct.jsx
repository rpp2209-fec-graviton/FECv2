import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useProductContext } from '../../Context/ContextProvider.jsx';

const useGlobalProduct = () => {
	// Get id from query string
	const productId = useParams();
	const { currentProductId, setCurrentProductId } = useProductContext();

	useEffect(() => {
		// Remove trailing slash '/' and set to
		// Global `selected product id` Context
		const id = productId && productId['*'].split('/')[0];
		setCurrentProductId(id);
	}, [productId]);

	return currentProductId;
};

export default useGlobalProduct;