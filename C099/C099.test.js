const main = require('./C099.js')

describe('C099.js', () => {
	test('Test 1', () => {
		expect(main(`3 4--SPLIT--2--SPLIT--1`)).toBe(`36`)
	})

	test('Test 2', () => {
		expect(main(`4 10--SPLIT--3--SPLIT--4--SPLIT--5`)).toBe(`280`)
	})
})