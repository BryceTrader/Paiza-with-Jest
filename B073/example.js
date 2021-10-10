const FILENAME = 'B073'

let example = `入力例1
5 6
4 3 6 1 3
3
1 3
1 5
2 3
出力例1
8 7 10 3 5
入力例2
10 1
3 3 7 3 7 5 8 3 5 3
5
1 7
6 9
5 7
1 2
4 8
出力例2
3 3 7 3 7 5 8 3 5 3`

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
