const Mycol = require('./CRUD_ori.js')
const main = async () => {
  const t = await Mycol.find(
    {
      title: /맨$/
    },
    { _id: 0 }
  ).lean()
  console.log(t)
}
main()
