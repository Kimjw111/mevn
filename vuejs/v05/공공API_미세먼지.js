const requset = require('request')
require('dotenv').config()
const key = process.env.okey
const url =
  'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey='
const urlTotal = url + key + '&sidoName=%EB%B6%80%EC%82%B0&returnType=json'
requset(urlTotal, (e, res, body) => {
  const rst = JSON.parse(body)
  const junpo = rst.response.body.items
  junpo.forEach((v, i) => {
    console.log(v.stationName, v.o3Value, v.coValue, v.pm10Value)
  })
})
