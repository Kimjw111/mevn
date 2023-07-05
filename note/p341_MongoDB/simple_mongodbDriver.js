const fs = require('fs')
const path = require('path')
const MongoClient = require('mongodb').MongoClient
const mongoDB = 'mongodb://127.0.0.1'
const DBname = 'my_database2'
const main = async () => {
  const Client = await MongoClient.connect(mongoDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).catch((err) => console.log(err))
  const _path = path.join(__dirname, './photos.json')
  const t = JSON.parse(fs.readFileSync(_path).toString())
  const col = Client.db(DBname).collection('Photo')
  console.time('5000건의 데이터 삽입')
  col.insertMany(t).then(() => {
    // insertMany가 deprecated되서 promise형태로 바뀜
    console.timeEnd('5000건의 데이터 삽입')
  })
}
main()
