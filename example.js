const FILENAME = ''

let example = ``

example = example.split('\n')

let input = []
let output = []
let cache = []

for (let i = 0; i < example.length; i++) {
	if (example[i][0] == '入') {
		i++
		while (i < example.length && example[i][0] != '出') {
			cache.push(example[i])
			i++
		}
		input.push(cache)
		cache = []
	}
	if (example[i][0] == '出') {
		i++
		while (i < example.length && example[i][0] != '入') {
			cache.push(example[i])
			i++
		}
		output.push(cache)
		cache = []
		i--
	}
}

input = input.map((x) => x.join('\n'))
output = output.map((x) => x.join('\n'))

module.exports = [FILENAME, input, output]
