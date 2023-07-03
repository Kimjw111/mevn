require('dotenv').config()
const request = require('request')
const { XMLParser } = require('fast-xml-parser')
const parser = new XMLParser()
const key = process.env.okey
const url = 'http://apis.data.go.kr/6260000/BusanBIMS/bitArrByArsno?serviceKey='
const option = '&arsno=05712'
const urlTotal = url + key + option
request(urlTotal, (e, res, body) => {
  const rst = parser.parse(body)
  const _ = rst.response.body.items
  console.log(_)
})
