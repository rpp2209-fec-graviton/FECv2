/**
 * @jest-environment jsdom
 */
require('dotenv').config()
import { fetch } from './data-utils.js';
import '@testing-library/jest-dom';

describe('Fetch', () => {
	it('should exist', function() {
    expect(fetch).not.toBe(undefined);
  });

	it('should be a function', () => {
    expect(typeof fetch).toBe('function');
  });

	it('should fetch products from the Atelier API when provided \'products\' endpoint', async () => {
		let products;

		await fetch('products', (err, data) => {
			if (err) {
				console.log('Fetch Test Error', err);
			} else {
				products = data.data;
			}
		})

		// console.log('Products?', products);
		expect(products[0].name).toBe("Camo Onesie");
		expect(products[0].id).toBe(71697);

		expect(products[2].name).toBe("Morning Joggers");
		expect(products[2].id).toBe(71699);
  });

	it('should fetch styles from the API when provided a product id and the \'styles\' endpoint', async () => {
    let styles;

		await fetch('products/71697/styles', (err, data) => {
			if (err) {
				console.log('Fetch Test Error', err);
			} else {
				styles = data.data;
			}
		})

		// console.log('Styles?', styles);
		expect(styles.results[0].name).toBe("Forest Green & Black");
		expect(styles.results[0].style_id).toBe(444218);

		expect(styles.results[1].name).toBe("Desert Brown & Tan");
		expect(styles.results[1].style_id).toBe(444219);

		expect(styles.results[2].name).toBe("Ocean Blue & Grey");
		expect(styles.results[2].style_id).toBe(444220);
  });
});