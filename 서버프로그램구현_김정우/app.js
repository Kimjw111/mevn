const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const app = express()
const _path = path.join(__dirname, './dist')
const PORT = 3000
app.use('/', express.static(_path))
app.use(logger('tiny'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/data', (req, res) => {
  const obj = req.body
  console.log(obj)
  console.log(obj.id)
  fs.writeFile(_path + '/' + obj.id + '.txt', JSON.stringify(obj), (e) => {
    if (e) console.log(e)
    console.log('파일 작성이 완료되었습니다.')
    res.send(
      `<script>alert('${obj.id}파일로 저장합니다.');history.go(-1)</script>`
    )
  })
})
app.get('/test', (req, res) => {
  let url_id = req.query.id
  let url_name = req.query.name
  res.send(`<p>아이디: ${url_id}</p><p>이름: ${url_name}</p>`)
})
app.get('/download', (req, res) => {
  fs.readdir(_path, 'utf-8', (err, data) => {
    let list = '<ul>'
    data.forEach((v) => {
      if (v.indexOf('.') === -1) {
        list += `<li><a href="#">[${v}]</a></li>`
      } else {
        list += `<li><a href="/${v}">${v}</a></li>`
      }
    })
    list += '</ul><a href="./index.html">홈으로</a>'
    res.send(list)
  })
})
app.listen(PORT, () => {
  console.log(_path)
  console.log('listening on port' + PORT)
})
