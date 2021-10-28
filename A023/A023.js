function main(lines) {
	lines = lines.split('--SPLIT--')
	let response = []
	//--------------- code below here ---------------
	let input = lines.slice()
	input.shift()
	input = input[0].split(' ').map((x) => +x)
	let weekRegister = []
	let days = 0
	let key = []
	for (let i = 0; i < input.length; i++) {
		weekRegister.push(input[i])
		if (weekRegister.length == 7) {
			let zeros = weekRegister.filter((x) => x == 0).length
			if (zeros >= 2) {
				days += 7
				if (!key.length) key = weekRegister
				weekRegister = []
			} else {
				weekRegister.shift()
			}
		}
	}
	let zeros = weekRegister.filter((x) => x == 0).length
	if (zeros >= 2) {
		days += weekRegister.length
	} else {
		for (let i = 0; i < weekRegister.length; i++) {
			if (weekRegister[i] != key[i]) break
			days++
		}
	}
	response.push(days)
	//--------------- end of block ---------------
	return response.join('\n')
}
module.exports = main
