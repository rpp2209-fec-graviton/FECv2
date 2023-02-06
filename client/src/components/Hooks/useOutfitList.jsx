import { useState, useEffect } from 'react';
import axios from 'axios';

const useOutfitList = () => {
  const [outfitItems, setOutfitItems] = useState([])
  const [outfitPhotoUrls, setOutfitPhotoUrls] = useState({});

    // get the items once on first load
		useEffect(() => {
			const storedItems = window.localStorage.getItem('OUTFIT_ITEMS');
			if ( storedItems !== null ) setOutfitItems(JSON.parse(storedItems));

			const storedPhotos = window.localStorage.getItem('OUTFIT_PHOTOS');
			if ( storedPhotos !== null ) setOutfitPhotoUrls(JSON.parse(storedPhotos));
		}, []);

		// set the outfit items in local storage, whenever they change
		useEffect(() => {
			window.localStorage.setItem('OUTFIT_ITEMS', JSON.stringify(outfitItems));
			window.localStorage.setItem('OUTFIT_PHOTOS', JSON.stringify(outfitPhotoUrls));
		}, [outfitItems, outfitPhotoUrls]);

		// add an item to the outfit list
		const addToOutfit = (product, ...args) => {
			if (!outfitItems.some(item => item.id === product.id)) {
				// Related Product Logic
				if (typeof args[0] === 'function') {
					const cp = product;
					const fetchData = args[0];

					fetchData(`products/${cp.id}/styles`)
					.then((styles) => {
						var itemPhotoUrl = styles.results[0].photos[0].thumbnail_url;
						setOutfitPhotoUrls({...outfitPhotoUrls, [cp.id]: itemPhotoUrl});
						setOutfitItems([...outfitItems, cp]);
					});
				// Overview Logic
				} else {
					const url = args[0];
					setOutfitPhotoUrls({...outfitPhotoUrls, [product.id]: url});
					setOutfitItems([...outfitItems, product]);
				}
			}
		};

		// remove an item from the outfit list
		const removeFromOutfit = (id) => {
			var newState = outfitItems.filter((item) => {
				return item.id !== id;
			});
			setOutfitItems(newState);
		};

  return { outfitItems, outfitPhotoUrls, addToOutfit, removeFromOutfit };
};

export default useOutfitList;