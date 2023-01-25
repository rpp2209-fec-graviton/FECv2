import React from 'react';
import Thumbnail from './Thumbnail.jsx';

function ThumbnailCarousel({ selected, styles }) {
	if (styles[selected.id]) {
		return (
			<div>
				{styles[selected.id].map(style => (<Thumbnail
					key={style.style_id}
					style={style}
				/>))}
			</div>
		)
	} else {
		return (
			<h3>No Styles to Pass to TN</h3>
		)
	}

};

export default ThumbnailCarousel;