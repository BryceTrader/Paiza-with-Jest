const main = require('./B073.js')

describe('B073.js', () => {
	test('Test 1', () => {
		expect(main(`5 6--SPLIT--4 3 6 1 3--SPLIT--3--SPLIT--1 3--SPLIT--1 5--SPLIT--2 3`)).toBe(`8 7 10 3 5`)
	})

	test('Test 2', () => {
		expect(main(`10 1--SPLIT--3 3 7 3 7 5 8 3 5 3--SPLIT--5--SPLIT--1 7--SPLIT--6 9--SPLIT--5 7--SPLIT--1 2--SPLIT--4 8`)).toBe(`3 3 7 3 7 5 8 3 5 3`)
	})
})