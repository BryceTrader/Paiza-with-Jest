function main(lines) {
	lines = lines.split('--SPLIT--')
	let response = []
	//--------------- code below here ---------------
	let input = lines.slice()
	let [x, lightLimit] = input[0].split(' ').map((x) => +x)
	input.shift()
	let trees = input[0].split(' ').map((x) => +x)
	input.shift()
	input.shift()

	for (let i = 0; i < input.length; i++) {
		let [start, end] = input[i].split(' ').map((x) => +x)
		let lights = 0
		let numTrees = Math.abs(start - 1 - end)
		for (let j = start - 1; j < end; j++) {
			lights += trees[j]
		}
		let curAvg = lights / numTrees
		if (curAvg < lightLimit) {
			for (let j = start - 1; j < end; j++) {
				trees[j] += lightLimit - Math.floor(curAvg)
			}
		}
	}

	console.log(trees.join(' '))

	//--------------- end of block ---------------
	response = trees
	return response.join(' ')
}
module.exports = main
