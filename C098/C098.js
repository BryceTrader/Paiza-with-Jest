function main(lines) {
	lines = lines.split('--SPLIT--')
	let response = []
	//--------------- code below here ---------------
	let input = lines.slice()
	let people = +input.shift()
	let balls = new Array(people).fill(0)

	for (let i = 0; i < people; i++) {
		balls[i] = +input[i]
	}
	let passing = input.splice(people + 1)

	for (let i = 0; i < passing.length; i++) {
		let [from, to, value] = passing[i].split(' ').map((x) => +x)
		from--
		to--

		if (balls[from] < value) value = balls[from]

		balls[to] += value
		balls[from] -= value
	}

	console.log(balls.join('\n'))

	//--------------- end of block ---------------
	response = balls
	return response.join('\n')
}
module.exports = main
