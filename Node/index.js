const util = require('./utils')

const createfile = require('./filesystem')

// console.log(util.addNumber(20,33))
// console.log(util.myFunc())

// createfile.createfile('test.txt', 'Hello world')
// createFile('test.txt', 'Hello World!')
const _fs = require('fs')
// console.log(_fs)

const fs = _fs.promises
; (async ( ) => {
console.log(await fs.readdir('.'))
})(); 
console.log(fs.readFileSync('index.js', 'utf8'))