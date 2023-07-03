const request = require('request')
require('dotenv').config()
const key = process.env.okey
const url =
  'http://apis.data.go.kr/6260000/BusanPopulationStaticService/getPopulationInfo?serviceKey='
const urlTotal = url + key + '=&pageNo=1&numOfRows=10&resultType=json'
request(urlTotal, (e, res, body) => {
  const people = JSON.parse(body).getPopulationInfo.body.items.item
  people.forEach((v) => {
    console.log(
      '구군: ' +
        v.gugun +
        '년도: ' +
        v.rateYear +
        '동 수: ' +
        v.dongCnt +
        '총 인구수: ' +
        v.totPopCnt
    )
  })
})
