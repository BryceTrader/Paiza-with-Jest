function main(lines) {
	lines = lines.split('--SPLIT--')
	let response = []
	//--------------- code below here ---------------
	let input = lines.slice()

	let [N, M, hours, buzzing] = input[0].split(' ').map((x) => +x)
	input.shift()

	let goods = new Array(N).fill(0)
	let result = goods.slice()

	for (let i = 0; i < M; i++) {
		let values = input[i].split(' ').map((x) => +x)
		for (let j = 0; j < goods.length; j++) {
			if (i >= hours) {
				minusEngagement = input[i - hours].split(' ').map((x) => +x)
				goods[j] -= minusEngagement[j]
			}
			goods[j] += values[j]
			if (goods[j] >= buzzing && result[j] == 0) {
				result[j] = `yes ${i + 1}`
			}
		}
	}

	for (let i = 0; i < result.length; i++) {
		if (result[i] == 0) result[i] = `no 0`
	}

	console.log(result.join('\n'))
	response = result
	//--------------- end of block ---------------
	return response.join('\n')
}
module.exports = main
