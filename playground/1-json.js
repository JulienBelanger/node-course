const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)

// console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)

const inBinFile = fs.readFileSync('1-json.json')
const inDict = JSON.parse(inBinFile.toString())
inDict.name = 'Julien'
inDict.planet = 'Mars'
inDict.age = 25

const outFile = JSON.stringify(inDict)
fs.writeFileSync('1-json.json', outFile)
