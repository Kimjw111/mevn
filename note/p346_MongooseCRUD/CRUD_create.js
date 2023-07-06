const Mycol = require('./CRUD_ori.js')
const main = async () => {
  const _data = {
    albumId: 12012,
    id: 312,
    title: '홍길동',
    url: 'google.com',
    thumbnailUrl: 'http://naver.com',
    albumId: 12012,
    id: 312,
    title: '슈퍼맨',
    url: 'google.com',
    thumbnailUrl: 'http://naver.com'
  }
  const CRUD_C = new Mycol(_data)
  const t = await CRUD_C.save()
  console.log(t)
}
main()
