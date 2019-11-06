// require
const express = require('express')
const app = express()
app.get('/', (req, res) => { res.send('index page') })
app.get('/index0', (req, res) => { res.send('index0 page') })
app.get('/index1', (req, res) => { res.send('index1 page') })
app.get('/index2', (req, res) => { res.send('index2 page') })
app.listen(3000, () => {
  console.log(`3000번 port에 http server를 띄웠습니다.`)
})
