const mongoose = require('mongoose')
// const Photo = require('./photo.js') //인덱스 전
const Photo = require('./photo_index.js') //인덱스 후
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/my_database'
const main = async () => {
  await mongoose
    .connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('connection succesful'))
    .catch((e) => console.log(e))
  console.time('id를 오름차순으로 찾기')
  const ret = await Photo.find().sort({ id: 1 }).limit(100)
  console.timeEnd('id를 오름차순으로 찾기')
}
main()
