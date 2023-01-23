import React from 'react';
import Thumbnail from './Thumbnail.jsx';

// Below the product info, user should be presented all product styles
// and have the ability to toggle between them.
// Each style should be displayed as a thumbnail

// Will have to map over images and render x # of thumbnails for each style.
function StyleSelector () {
	return (
		<div style={{border: "1px solid grey"}}>
			<h3>Style Selector Component</h3>
			<Thumbnail />
		</div>
	)
};

export default StyleSelector;