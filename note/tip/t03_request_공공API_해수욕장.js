const requset = require('request')
require('dotenv').config()
const key = process.env.okey
const url =
  'http://apis.data.go.kr/1360000/BeachInfoservice/getWhBuoyBeach?serviceKey='
const urlTotal =
  url + key + '&dataType=JSON&beach_num=306&searchTime=202306301600'
requset(urlTotal, (e, res, body) => {
  const beach = JSON.parse(body)
  console.log(beach.response.body.items.item)
})
