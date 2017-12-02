import _ from 'lodash'
import fs from 'fs'
// import path from 'path'

const utils = {
  camelCaseToPath (str) {
    const words = []
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
  },
  readdir (dir) {
    return _.map(fs.readdirSync(dir), file => {
      return {
        name: file,
        fullpath: dir + '/' + file,
        path: dir
      }
    })
  },
  walk (dir) {
    const dirs = []
    const files = []

    const filelist = this.readdir(dir)
    _.each(filelist, file => {
      if (fs.statSync(file.fullpath).isDirectory()) {
        // console.log({file})
        dirs.push(file.fullpath)
        dirs.push(...this.walk(file.fullpath))
      } else {
        files.push(file)
      }
    })
    return {dirs, files}
  }

}

export default utils
