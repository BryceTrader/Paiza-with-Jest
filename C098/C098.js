function main(lines) {
	lines = lines.split('--SPLIT--')
	let response = []
	//--------------- code below here ---------------
	let input = lines.slice()
	const people = +input.shift()
	const passing = input.splice(people + 1)
	input.pop()
	const balls = input.map(x => +x)
	
	for (let i = 0; i < passing.length; i++) {
		let [from, to, value] = passing[i].split(' ').map((x) => +x)
		from--
		to--

		if (balls[from] < value) value = balls[from]

		balls[to] += value
		balls[from] -= value
	}

	//--------------- end of block ---------------
	response = balls
	return response.join('\n')
}
module.exports = main
