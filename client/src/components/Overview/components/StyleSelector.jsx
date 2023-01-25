import React from 'react';
import Button from './Button.jsx';
import Thumbnail from './Thumbnail.jsx';
import styles from '../overview.module.css';

// Below the product info, user should be presented all product styles
// and have the ability to toggle between them.
// Each style should be displayed as a thumbnail
function StyleSelector () {
	return (
		<div className={styles.border}>
			<h3>Style Selector</h3>
			<select>
				<option value="Select Size">Select Size</option>
				<option value="S">S</option>
				<option value="M">M</option>
				<option value="L">L</option>
				<option value="XL">XL</option>
				<option value="2XL">2XL</option>
			</select>

			<select>
				<option value="Quantity">Quantity</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			</select>
			<Button>+ Add to Bag</Button>
		</div>
	)
};

export default StyleSelector;