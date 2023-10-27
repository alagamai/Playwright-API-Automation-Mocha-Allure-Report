// @ts-check
const { test, expect } = require('@playwright/test');
const expectedPlaces = require('../test-data/expectedPlaces.json');
const exp = require('constants');

async function checkResponse(response, expStatusText, expStatusCode) {
	expect(response.statusText).toEqual(expStatusText);
	expect(response.statusCode).toEqual(expStatusCode);
}

async function apiGet(request, url) {
	const response = await request.get(url);

	return {
		url: url,
		statusText: await response.statusText(),
		statusCode: await response.status(),
		responseText: await response.text(),
		responseJSON: await response.json(),
	};

	// console.log(jsonResponse.country);
}

test.describe('user endpoints', () => {
	test('GET - api.zippopotam.us/country/postal-code', async ({
		request,
		baseURL,
	}) => {
		try {
			const result = await apiGet(request, `${baseURL}/us/90210`);
			console.log(result);
			checkResponse(result, 'OK', 200);
			expect(result.responseJSON).toEqual(expectedPlaces);
			expect(result.responseJSON.places[0]['state']).toEqual('California');
		} catch (error) {
			console.error('Error during test:', error);
		}
	});

	test('GET - api.zippopotam.us/country/state/city ', async ({
		request,
		baseURL,
	}) => {
		try {
			const result = await apiGet(request, `${baseURL}/us/ma/belmont`);
			console.log(result);
			checkResponse(result, 'OK', 200);
			expect(result.responseJSON).toEqual(expectedPlaces);
			expect(result.responseJSON.places[0]['place name']).toEqual('Belmont');
		} catch (error) {
			console.error('Error during test:', error);
		}
	});

	test('GET - negative test - api.zippopotam.us/invalid-country/state/city', async ({
		request,
		baseURL,
	}) => {
		try {
			const result = await apiGet(request, `${baseURL}/invalid/ma/belmont`);
			console.log(result);
			checkResponse(result, 'Not Found', 404);
		} catch (error) {
			console.error('Error during test:', error);
		}
	});
});
