require('dotenv').config()
const express = require('express')
const request = require('request')
const app = express()
const client_id = process.env.nid
const client_secret = process.env.npw
let sou = 'ko',
  tar = 'en'
app.get('/trans', function (req, res) {
  const api_url = 'https://openapi.naver.com/v1/papago/n2mt'
  let query = req.query.text
  const options = {
    url: api_url,
    form: { source: sou, target: tar, text: query },
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret
    }
  }
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      query = req.query.text
      res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' })
      res.end(body)
    } else {
      res.status(response.statusCode).end()
      console.log('error = ' + response.statusCode)
    }
  })
})
app.listen(3000, function () {
  console.log('http://127.0.0.1:3000/trans app listening on port 3000!')
})
