const FILENAME = 'B098'

let example = `入力例1
2 5 3 1000
100 100
500 200
60 300
100 500
10 1000
出力例1
no 0
yes 4
入力例2
4 4 4 12
1 1 1 1
1 2 3 4
1 3 6 10
1 4 10 20
出力例2
no 0
no 0
yes 4
yes 3
入力例3
3 5 3 1558
71 825 1537
775 640 2
64 3596 1
501 2442 8
11 2756 527
出力例3
no 0
yes 3
no 0`

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
