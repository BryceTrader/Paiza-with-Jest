const main = require('./B098.js')

describe('B098.js', () => {
	test('Test 1', () => {
		expect(main(`2 5 3 1000--SPLIT--100 100--SPLIT--500 200--SPLIT--60 300--SPLIT--100 500--SPLIT--10 1000`)).toBe(`no 0
yes 4`)
	})

	test('Test 2', () => {
		expect(main(`4 4 4 12--SPLIT--1 1 1 1--SPLIT--1 2 3 4--SPLIT--1 3 6 10--SPLIT--1 4 10 20`)).toBe(`no 0
no 0
yes 4
yes 3`)
	})

	test('Test 3', () => {
		expect(main(`3 5 3 1558--SPLIT--71 825 1537--SPLIT--775 640 2--SPLIT--64 3596 1--SPLIT--501 2442 8--SPLIT--11 2756 527`)).toBe(`no 0
yes 3
no 0`)
	})
})