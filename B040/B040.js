function main(lines) {
	lines = lines.split('--SPLIT--')
	let response = []
	//--------------- code below here ---------------
	let input = lines.slice()
	let [shuffle, setting] = input[0].split(' ')
	input.shift()
	let msg = input[0].split(' ')
	for (let k = 0; k < shuffle; k++) {
		for (let i = 0; i < msg.length; i++) {
			let replaceStr = ''
			for (let j = 0; j < msg[i].length; j++) {
				replaceStr += String.fromCharCode(setting.indexOf(msg[i][j]) + 97)
			}
			msg[i] = replaceStr
		}
	}
	response = msg
	//--------------- end of block ---------------
	return response.join(' ')
}
module.exports = main
