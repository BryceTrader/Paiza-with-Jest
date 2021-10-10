const fs = require('fs')
let [problemName, examples] = require('./example')
const DIRNAME = problemName
const FILEPATH = `./${DIRNAME}/`
const FILENAME = `${DIRNAME}.js`
const FILETESTNAME = `${DIRNAME}.test.js`

// Building the expected input and outputs from the example file
examples = examples.split('\n')

let EXPECTEDInput = []
let EXPECTEDOUTput = []
let cache = []

for (let i = 0; i < examples.length; i++) {
	if (examples[i][0] == '入') {
		i++
		while (i < examples.length && examples[i][0] != '出') {
			cache.push(examples[i])
			i++
		}
		EXPECTEDInput.push(cache)
		cache = []
	}
	if (examples[i][0] == '出') {
		i++
		while (i < examples.length && examples[i][0] != '入') {
			cache.push(examples[i])
			i++
		}
		EXPECTEDOUTput.push(cache)
		cache = []
		i--
	}
}

EXPECTEDInput = EXPECTEDInput.map((x) => x.join('--SPLIT--'))
EXPECTEDOUTput = EXPECTEDOUTput.map((x) => x.join('\n'))

// Jest File
const template = `\ttest(--FILENAME--, () => {
\t\texpect(main(\`--INPUT--\`)).toBe(\`--OUTPUT--\`)
\t})\n`

const IMPORT = `const main = require('./${FILENAME}')\n\n`
const DESCRIBE = `describe('${FILENAME}', () => {\n`
let data = IMPORT + DESCRIBE

for (let i = 0; i < EXPECTEDInput.length; i++) {
	let temp = template
	temp = temp
		.replace('--FILENAME--', `'Test ${i + 1}'`)
		.replace('--INPUT--', EXPECTEDInput[i])
		.replace('--OUTPUT--', EXPECTEDOUTput[i])

	data += temp
	if (i != EXPECTEDInput.length - 1) data += '\n'
}
data += `})`

let codeTemplate = `function main(lines) {
\tlines = lines.split('--SPLIT--')
\tlet response = []
\t//--------------- code below here ---------------\n\t\n\n
\t//--------------- end of block ---------------
\treturn response.join('\\n')
}
module.exports = main`
fs.mkdirSync(FILEPATH)
fs.appendFileSync(FILEPATH + FILETESTNAME, data)
fs.appendFileSync(FILEPATH + FILENAME, codeTemplate)
fs.copyFileSync('./.prettierrc', FILEPATH + '.prettierrc')
fs.copyFileSync('./example.js', FILEPATH + `example${FILENAME}`)
