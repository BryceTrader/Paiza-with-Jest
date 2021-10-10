const main = require('./C098.js')

describe('C098.js', () => {
	test('Test 1', () => {
		expect(main(`3--SPLIT--10--SPLIT--5--SPLIT--8--SPLIT--3--SPLIT--1 3 5--SPLIT--3 2 3--SPLIT--2 1 10`)).toBe(`13
0
10`)
	})

	test('Test 2', () => {
		expect(main(`5--SPLIT--51--SPLIT--49--SPLIT--15--SPLIT--61--SPLIT--40--SPLIT--5--SPLIT--3 1 5--SPLIT--5 2 14--SPLIT--4 3 79--SPLIT--3 5 31--SPLIT--4 3 51`)).toBe(`56
63
40
0
57`)
	})
})