// Path Module
const path = require('path')

console.log(path.sep)

// Basically gives the file path
const filePath = path.join('/content', 'subfolder','test.txt')
console.log(filePath)

// Path.resolve returns an absolute path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
