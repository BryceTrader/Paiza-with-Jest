const main = require('./B040.js')

describe('B040.js', () => {
	test('Test 1', () => {
		expect(main(`1 qwertyuiopasdfghjklzxcvbnm--SPLIT--hqomq gfsoft iqeaqzigf`)).toBe(`paiza online hackathon`)
	})

	test('Test 2', () => {
		expect(main(`100 poiuytrewqlkjhgfdsamnbvcxz--SPLIT--snn xufu ngebmv qwtg`)).toBe(`cpp java python ruby`)
	})
})