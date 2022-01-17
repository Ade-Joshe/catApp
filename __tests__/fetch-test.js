/**
 * @format
 */

import 'react-native';

const mockData = [
	{
		name: "Bengal",
		id: "dfsd",
		image: { url: "https://cdn2.thecatapi.com/images/mj.jpg" }
	}, {
		name: "Bengal",
		id: "dfsd",
		image: { url: "https://cdn2.thecatapi.com/images/mj.jpg" }
	}
];

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({ data: mockData }),
	})
);

beforeEach(() => {
	fetch.mockClear();
});

it('gets all cat', async () => {

	const cats = await global.fetch()
		.then(res => res.json())
		.then(data => data.data)

	expect(cats).toBeDefined();
	expect(cats).toBe(mockData)
});