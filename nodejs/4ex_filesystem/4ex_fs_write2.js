const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const app = express()
const _path = path.join(__dirname, '/')
app.use('/', express.static(_path))
app.use(logger('tiny'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/data', (req, res) => {
  const obj = req.body
  fs.writeFile(_path + obj.name + '.txt', JSON.stringify(obj), (e) => {
    if (e) console.log(e)
    console.log('파일 작성이 완료되었습니다.')
    res.send(
      `<script>alert('${obj.name}파일로 저장합니다.');history.go(-1)</script>`
    )
  })
})
app.get('/list', (req, res) => {
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
fs.appendFile(_path + 'test1' + '.txt', 'test will append', (e) => {
  if (e) console.log(e)
  console.log('append')
})
fs.unlink(_path + 'test1' + '.txt', (err) => {
  if (err) console.log(err)
  console.log('file is delete')
})
app.listen(3000, () => {
  console.log('listening on port 3000')
})
