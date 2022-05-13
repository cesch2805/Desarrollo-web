const fs = require('fs')

const content = fs.readFile(process.argv[2], function(err,content){
  const str = content.toString().split('\n').length - 1
  console.log(str)
})

