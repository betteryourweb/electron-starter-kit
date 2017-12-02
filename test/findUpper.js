const _ = require('lodash')
const str = 'MusicLibrary'
let toPath = null

const camelCaseToPath = (str) => {
  let words = []
  let word = ''
  _.each(str, char => {
    if (char === char.toUpperCase()) {
      if (word) words.push(word)
      word = ''
    }
    word += char.toLowerCase()
  })
  words.push(word)
  return words.join('/')
}

toPath = camelCaseToPath(str)
console.log({toPath})
