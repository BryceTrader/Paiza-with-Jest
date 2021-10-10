const fs = require('fs/promises')
const examples = require('./example')

const DIRNAME = examples.shift()
const FILEPATH = `./${DIRNAME}/`
const FILENAME = `${DIRNAME}.js`
const FILETESTNAME = `${DIRNAME}.test.js`

const INPUT = preMap(examples[0])
const OUTPUT = examples[1]

const template = `\ttest(--FILENAME--, () => {
\t\texpect(main(\`--INPUT--\`)).toBe(\`--OUTPUT--\`)
\t})\n`

const IMPORT = `const main = require('./${FILENAME}')\n\n`
const DESCRIBE = `describe('${FILENAME}', () => {\n`
let data = IMPORT + DESCRIBE

for (let i = 0; i < INPUT.length; i++) {
	let temp = template
	temp = temp
		.replace('--FILENAME--', `'Test ${i + 1}'`)
		.replace('--INPUT--', INPUT[i])
		.replace('--OUTPUT--', OUTPUT[i])

	data += temp
	if (i != INPUT.length - 1) data += '\n'
}

data += `})`

function preMap(map) {
	return map.map((x) => x.split('\n').join('--SPLIT--'))
}

let codeTemplate = `function main(lines) {
\tlines = lines.split('--SPLIT--')
\tlet response = []
\t//--------------- code below here ---------------\n\t\n\n
\t//--------------- end of block ---------------
\treturn response.join('')
}
module.exports = main`
fs.mkdir(FILEPATH).then(fs.appendFile(FILEPATH + FILETESTNAME, data))
fs.appendFile(FILEPATH + FILENAME, codeTemplate)
fs.copyFile('./.prettierrc', FILEPATH + '.prettierrc')
fs.copyFile('./example.js', FILEPATH + 'example.js')
