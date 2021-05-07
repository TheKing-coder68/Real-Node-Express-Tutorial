//FS Module
//This:
const {readFileSync, writeFileSync} = require('fs');
// Is the same as these:
// const fs= require('fs');
// fs.readFIleSYnc;

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// This will combine both the first.txt and the second.txt files
console.log(first,second)


// If there is no such file as result-sync.txt, Node will create that file
// If there was already text in the file, the text will be overwritten by Node
// THe flag at the ending allows Node to just add the text to the result-sync.txt file
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}. ${second}`, { flag : 'a' }) 