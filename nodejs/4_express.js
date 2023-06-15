const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hi', (req, res) => {
  res.send('안녕하세요!')
})// /로컬에 있는 포트의 바로 밑

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})