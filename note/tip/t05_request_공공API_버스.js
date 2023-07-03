// const de=require('dotenv')
// de.config()
require('dotenv').config()
const request = require('request')
// const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");
const { XMLParser } = require('fast-xml-parser')
const parser = new XMLParser()
const key = process.env.okey
const url = 'http://apis.data.go.kr/6260000/BusanBIMS/busStopList?serviceKey='
const bstop = encodeURI('서면역') // <-> decodeURI()
const option = '&pageNo=1&numOfRows=100&bstopnm=' + bstop
const urlTotal = url + key + option
request(urlTotal, (e, res, body) => {
  const rst = parser.parse(body)
  const a = rst.response.body.items
  console.log(a)
})
