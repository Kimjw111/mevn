const aa = async function () {
  await a()
  await b()
  await c()
}
aa()

const main = async () => {
  await a()
  await b()
  await c()
}
//차례대로 실행하기 위해서

main()
