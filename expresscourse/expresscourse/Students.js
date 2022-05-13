const fs = require('fs');

let rawdata = fs.readFileSync('studen.json');
let student = JSON.parse(rawdata);

console.log(student);

module.exports = student;