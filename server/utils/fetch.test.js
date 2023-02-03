/**
 * @jest-environment jsdom
 */
require('dotenv').config()
import { fetch } from './fetch.js';
import mockAxios from 'axios';

const mockProducts = [
	{
			"id": 1,
			"campus": "mock-hr-rpp",
			"name": "Mock Onesie",
			"slogan": "Mock Onesie Slogan",
			"description": "Mock Onesie Description",
			"category": "Mock Jackets",
			"default_price": "Mock 140.00",
			"created_at": "mock-2022-05-11T19:38:15.373Z",
			"updated_at": "mock-2022-05-11T19:38:15.373Z"
	},
	{
			"id": 2,
			"campus": "mock-hr-rpp",
			"name": "Mock Sunglasses",
			"slogan": "Mock Sunglasses Slogan",
			"description": "Mock Sunglasses Description",
			"category": "Mock Accessories",
			"default_price": "Mock 69.00",
			"created_at": "mock-2022-05-11T19:38:15.373Z",
			"updated_at": "mock-2022-05-11T19:38:15.373Z"
	},
	{
			"id": 3,
			"campus": "mock-hr-rpp",
			"name": "Mock Joggers",
			"slogan": "Mock Joggers Slogan",
			"description": "Mock Joggers Description",
			"category": "Mock Pants",
			"default_price": "Mock 40.00",
			"created_at": "mock-2022-05-11T19:38:15.373Z",
			"updated_at": "mock-2022-05-11T19:38:15.373Z"
	},
	{
			"id": 4,
			"campus": "mock-hr-rpp",
			"name": "Mock Slacks",
			"slogan": "Mock Slacks Slogan",
			"description": "Mock Slacks Description",
			"category": "Mock Pants",
			"default_price": "Mock 65.00",
			"created_at": "mock-2022-05-11T19:38:15.373Z",
			"updated_at": "mock-2022-05-11T19:38:15.373Z"
	},
	{
			"id": 5,
			"campus": "mock-hr-rpp",
			"name": "Mock Sneakers",
			"slogan": "Mock Sneakers Slogan",
			"description": "Mock Sneakers Description",
			"category": "Mock Sneakers",
			"default_price": "Mock 99.00",
			"created_at": "mock-2022-05-11T19:38:15.373Z",
			"updated_at": "mock-2022-05-11T19:38:15.373Z"
	}
];

const mockStyles = {
	"product_id": "mock-71697",
	"results": [
			{
					"style_id": 1,
					"name": "Mock Forest Green & Black",
					"original_price": "Mock 140.00",
					"sale_price": null,
					"default?": true,
					"photos": [
							{
								"thumbnail_url": "mock-1-first-thumbnail-url",
								"url": "mock-1-first-url"
							},
							{
								"thumbnail_url": "mock-1-second-thumbnail-url",
								"url": "mock-1-second-url"
							},
							{
								"thumbnail_url": "mock-1-third-thumbnail-url",
								"url": "mock-1-third-url"
							},
							{
								"thumbnail_url": "mock-1-fourth-thumbnail-url",
								"url": "mock-1-fourth-url"
							},
							{
								"thumbnail_url": "mock-1-fifth-thumbnail-url",
								"url": "mock-1-fifth-url"
							},
							{
								"thumbnail_url": "mock-1-sixth-thumbnail-url",
								"url": "mock-1-sixth-url"
							}
					],
					"skus": {
							"mock-2580526": {
									"quantity": 8,
									"size": "XS"
							},
							"mock-2580527": {
									"quantity": 16,
									"size": "S"
							},
							"mock-2580528": {
									"quantity": 17,
									"size": "M"
							},
							"mock-2580529": {
									"quantity": 10,
									"size": "L"
							},
							"mock-2580530": {
									"quantity": 15,
									"size": "XL"
							},
							"mock-2580531": {
									"quantity": 4,
									"size": "XL"
							}
					}
			},
			{
					"style_id": 2,
					"name": "Mock Desert Brown & Tan",
					"original_price": "Mock 140.00",
					"sale_price": null,
					"default?": false,
					"photos": [
						{
							"thumbnail_url": "mock-2-first-thumbnail-url",
							"url": "mock-2-first-url"
						},
						{
							"thumbnail_url": "mock-2-second-thumbnail-url",
							"url": "mock-2-second-url"
						},
						{
							"thumbnail_url": "mock-2-third-thumbnail-url",
							"url": "mock-2-third-url"
						},
						{
							"thumbnail_url": "mock-2-fourth-thumbnail-url",
							"url": "mock-2-fourth-url"
						},
						{
							"thumbnail_url": "mock-2-fifth-thumbnail-url",
							"url": "mock-2-fifth-url"
						},
						{
							"thumbnail_url": "mock-2-sixth-thumbnail-url",
							"url": "mock-2-sixth-url"
						}
					],
					"skus": {
							"mock-2580532": {
									"quantity": 8,
									"size": "XS"
							},
							"mock-2580533": {
									"quantity": 16,
									"size": "S"
							},
							"mock-2580534": {
									"quantity": 17,
									"size": "M"
							},
							"mock-2580535": {
									"quantity": 10,
									"size": "L"
							},
							"mock-2580536": {
									"quantity": 15,
									"size": "XL"
							},
							"mock-2580537": {
									"quantity": 6,
									"size": "XXL"
							}
					}
			},
			{
					"style_id": 3,
					"name": "Mock Ocean Blue & Grey",
					"original_price": "Mock 140.00",
					"sale_price": "Mock 100.00",
					"default?": false,
					"photos": [
						{
							"thumbnail_url": "mock-3-first-thumbnail-url",
							"url": "mock-3-first-url"
						},
						{
							"thumbnail_url": "mock-3-second-thumbnail-url",
							"url": "mock-3-second-url"
						},
						{
							"thumbnail_url": "mock-3-third-thumbnail-url",
							"url": "mock-3-third-url"
						},
						{
							"thumbnail_url": "mock-3-fourth-thumbnail-url",
							"url": "mock-3-fourth-url"
						},
						{
							"thumbnail_url": "mock-3-fifth-thumbnail-url",
							"url": "mock-3-fifth-url"
						},
						{
							"thumbnail_url": "mock-3-sixth-thumbnail-url",
							"url": "mock-3-sixth-url"
						}
					],
					"skus": {
							"mock-2580538": {
									"quantity": 8,
									"size": "XS"
							},
							"mock-2580539": {
									"quantity": 16,
									"size": "S"
							},
							"mock-2580540": {
									"quantity": 17,
									"size": "M"
							},
							"mock-2580541": {
									"quantity": 10,
									"size": "L"
							},
							"mock-2580542": {
									"quantity": 15,
									"size": "XL"
							},
							"mock-2580543": {
									"quantity": 6,
									"size": "XXL"
							}
					}
			},
			{
					"style_id": 4,
					"name": "Mock Digital Red & Black",
					"original_price": "Mock 140.00",
					"sale_price": null,
					"default?": false,
					"photos": [
						{
							"thumbnail_url": "mock-4-first-thumbnail-url",
							"url": "mock-4-first-url"
						},
						{
							"thumbnail_url": "mock-4-second-thumbnail-url",
							"url": "mock-4-second-url"
						},
						{
							"thumbnail_url": "mock-4-third-thumbnail-url",
							"url": "mock-4-third-url"
						},
						{
							"thumbnail_url": "mock-4-fourth-thumbnail-url",
							"url": "mock-4-fourth-url"
						},
						{
							"thumbnail_url": "mock-4-fifth-thumbnail-url",
							"url": "mock-4-fifth-url"
						},
						{
							"thumbnail_url": "mock-4-sixth-thumbnail-url",
							"url": "mock-4-sixth-url"
						}
					],
					"skus": {
							"mock-2580544": {
									"quantity": 8,
									"size": "XS"
							},
							"mock-2580545": {
									"quantity": 16,
									"size": "S"
							},
							"mock-2580546": {
									"quantity": 17,
									"size": "M"
							},
							"mock-2580547": {
									"quantity": 10,
									"size": "L"
							},
							"mock-2580548": {
									"quantity": 15,
									"size": "XL"
							},
							"mock-2580549": {
									"quantity": 6,
									"size": "XXL"
							}
					}
			},
			{
					"style_id": 5,
					"name": "Mock Sky Blue & White",
					"original_price": "Mock 140.00",
					"sale_price": "Mock 100.00",
					"default?": false,
					"photos": [
						{
							"thumbnail_url": "mock-5-first-thumbnail-url",
							"url": "mock-5-first-url"
						},
						{
							"thumbnail_url": "mock-5-second-thumbnail-url",
							"url": "mock-5-second-url"
						},
						{
							"thumbnail_url": "mock-5-third-thumbnail-url",
							"url": "mock-5-third-url"
						},
						{
							"thumbnail_url": "mock-5-fourth-thumbnail-url",
							"url": "mock-5-fourth-url"
						},
						{
							"thumbnail_url": "mock-5-fifth-thumbnail-url",
							"url": "mock-5-fifth-url"
						},
						{
							"thumbnail_url": "mock-5-sixth-thumbnail-url",
							"url": "mock-5-sixth-url"
						}
					],
					"skus": {
							"mock-2580550": {
									"quantity": 8,
									"size": "XS"
							},
							"mock-2580551": {
									"quantity": 16,
									"size": "S"
							},
							"mock-2580552": {
									"quantity": 17,
									"size": "M"
							},
							"mock-2580553": {
									"quantity": 10,
									"size": "L"
							},
							"mock-2580554": {
									"quantity": 15,
									"size": "XL"
							},
							"mock-2580555": {
									"quantity": 6,
									"size": "XXL"
							}
					}
			},
			{
					"style_id": 6,
					"name": "Mock Dark Grey & Black",
					"original_price": "Mock 170.00",
					"sale_price": null,
					"default?": false,
					"photos": [
						{
							"thumbnail_url": "mock-6-first-thumbnail-url",
							"url": "mock-1-first-url"
						},
						{
							"thumbnail_url": "mock-6-second-thumbnail-url",
							"url": "mock-1-second-url"
						},
						{
							"thumbnail_url": "mock-6-third-thumbnail-url",
							"url": "mock-1-third-url"
						},
						{
							"thumbnail_url": "mock-6-fourth-thumbnail-url",
							"url": "mock-6-fourth-url"
						},
						{
							"thumbnail_url": "mock-6-fifth-thumbnail-url",
							"url": "mock-6-fifth-url"
						},
						{
							"thumbnail_url": "mock-6-sixth-thumbnail-url",
							"url": "mock-6-sixth-url"
						}
					],
					"skus": {
							"mock-2580556": {
									"quantity": 8,
									"size": "XS"
							},
							"mock-2580557": {
									"quantity": 16,
									"size": "S"
							},
							"mock-2580558": {
									"quantity": 17,
									"size": "M"
							},
							"mock-2580559": {
									"quantity": 10,
									"size": "L"
							},
							"mock-2580560": {
									"quantity": 15,
									"size": "XL"
							},
							"mock-2580561": {
									"quantity": 6,
									"size": "XXL"
							}
					}
			}
	]
};

jest.mock('axios');

describe('Fetch Import', function() {
	it('should exist', function() {
    expect(fetch).not.toBe(undefined);
  });

	it('should be a function', () => {
    expect(typeof fetch).toBe('function');
  });
});

describe('Fetch Functionality', () => {
	afterEach(jest.clearAllMocks);

	it('\'products\' endpoint should return a list of products', async () => {
		mockAxios.get.mockResolvedValue(mockProducts);

		await fetch('products', (err, products) => {
			if (err) {
				console.log('Fetch Test Error', err);
			} else {
				// console.log('fetch test data', products);
				expect(products[0].name).toBe("Mock Onesie");
				expect(products[0].id).toBe(1);

				expect(products[1].name).toBe("Mock Sunglasses");
				expect(products[1].id).toBe(2);

				expect(products[2].name).toBe("Mock Joggers");
				expect(products[2].id).toBe(3);
			}
		});
  });

	it('\'styles\' endpoint should return a list of product styles', async () => {
		mockAxios.get.mockResolvedValue(mockStyles);

		await fetch('products/71697/styles', (err, styles) => {
			if (err) {
				console.log('Fetch Test Error', err);
			} else {
				// console.log('Product Styles', styles.results[0]);

				expect(styles.results[0].name).toBe("Mock Forest Green & Black");
				expect(styles.results[0].style_id).toBe(1);
				expect(styles.results[0].skus["mock-2580526"]).toEqual({ quantity: 8, size: 'XS' });

				expect(styles.results[1].name).toBe("Mock Desert Brown & Tan");
				expect(styles.results[1].style_id).toBe(2);
				expect(styles.results[1].skus["mock-2580533"]).toEqual({ quantity: 16, size: 'S' });
			}
		})
  });
});