var fs = require('fs')

const DIR_NAME = '.'
const FIND_CHAR = '_'
const REPLACE_CHAR = '&'

const renameFile = (filename) => {
  if (filename.includes('_')) {
    const findRegex = new RegExp(FIND_CHAR, 'g')

    fs.rename(
      `${DIR_NAME}/${filename}`,
      `${DIR_NAME}/${filename.replace(findRegex, REPLACE_CHAR)}`,
      (err) => {
        if (err) {
          console.log(err)
          return
        }
      }
    )
  }
}

const readFiles = (dirname) => {
  fs.readdir(dirname, (err, filenames) => {
    if (err) {
      console.log(err)
      return;
    }

    filenames.forEach((filename) => {
      renameFile(filename)
    });
  });
}

readFiles(DIR_NAME)
