const fs = require('fs');

let arr = fs.readFileSync('shoes.json');
let shoes = JSON.parse(arr);

//console.log(shoes)

module.exports = shoes