const main = require('./A023.js')

describe('A023.js', () => {
	test('Test 1', () => {
		expect(main(`14--SPLIT--1 1 1 1 1 0 0 1 1 1 1 1 0 0`)).toBe(`14`)
	})

	test('Test 2', () => {
		expect(main(`9--SPLIT--1 0 1 1 1 1 1 1 0`)).toBe(`0`)
	})

	test('Test 3', () => {
		expect(main(`11--SPLIT--1 1 1 0 1 1 1 0 1 1 0`)).toBe(`10`)
	})

	test('Test 4', () => {
		expect(main(`11--SPLIT--1 0 1 1 1 1 1 1 0 0`)).toBe(`7`)
	})

	test('Test 5', () => {
		expect(main(`11--SPLIT--0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1`)).toBe(`11`)
	})
})
