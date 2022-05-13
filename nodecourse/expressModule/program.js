/* const express = require('express')
const path = require('path')
const app = express()
const filePath = process.argv[3] || path.join(__dirname, 'public')
const portNumber = process.argv[2]

app.use(express.static(filePath))
app.listen(portNumber) */

//--- 3 ---
/* const express = require('express')
const app = express()

const portNumber = process.argv[2]
const pathToPugTemplate = process.argv[3]

app.set('view engine', 'pug')
app.set('views', pathToPugTemplate)
app.get('/home', (req, res) => {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(portNumber) */

//--- 4 ----
/* 
const express = require('express')
const bodyparser = require('body-parser')
const app = express()

const portNumber = process.argv[2]

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', (req, res) => {
  let reverse = req.body.str.split('').reverse().join('')
  res.end(reverse)
})

app.listen(portNumber) */

/* //--- 5 ---

const express = require('express')
const app = express()

const portNumber = process.argv[2]

app.use(require('stylus').middleware(process.argv[3]))
app.use(express.static(process.argv[3]))

app.listen(portNumber) */

/* //--- 6 ---

const express = require('express')
const app = express()

const portNumber = process.argv[2]

app.param('id', (req, res, next, id) => {
  req.id = id
  next()
})

app.put('/message/:id', (req, res) =>  {
  let hash = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + req.id)
    .digest('hex')
  res.end(hash)
})

app.listen(portNumber) */

/* //--- 7 ---

const express = require('express')
const app = express()

const portNumber = process.argv[2]

app.get('/search', (req, res) => {
  res.send(req.query)
})

app.listen(portNumber) */

// ---- 8 ----

const express = require('express')
const fs = require('fs')
const app = express()

const portNumber = process.argv[2]
const filename = process.argv[3]

app.get('/books', (req, res) => {
  fs.readFile(filename, (err, data) => {
    if (err) return res.sendStatus(500)
    res.json(JSON.parse(data))
  })
})

app.listen(portNumber)