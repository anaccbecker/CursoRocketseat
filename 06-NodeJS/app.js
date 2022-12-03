// --name
// --greeting

// const position = process.argv.indexOf('--name')


// const name = process.argv[position+1]

// console.log(name); 
const getFlag = require('./exportGetFlag')


const name = getFlag('--name')
const greeting = getFlag('--greeting')

console.log(greeting , " " , name);