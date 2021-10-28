function main(lines) {
	lines = lines.split('--SPLIT--')
	let response = []
	//--------------- code below here ---------------
	let input = lines.slice()
	let [x, height] = input[0].split(' ').map((x) => +x)
	input.shift()
	let width = height
	for (let i = 0; i < input.length; i++) {
		width += height - +input[i]
	}
	response = width * height
	//--------------- end of block ---------------
	return response.toString()
}
module.exports = main
