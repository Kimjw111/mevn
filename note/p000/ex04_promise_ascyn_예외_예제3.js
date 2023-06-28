// Promise 는 reject 로 예외 처리 할 수 있다.
function promErr() {
  return new Promise((resolve, reject) => {
    reject('Promise의 예외처리 입니다.')
  })
}
const resultP = promErr().catch((e) => {
  console.log(e)
})

// async는 throw로 예외 처리 할 수 있다.
async function asyncErr() {
  throw 'async의 예외처리 입니다.'
  await console.log(new Date())
}
// const resultA = asyncErr().catch((e) => {
//   console.log(e)
// })

try {
  asyncErr()
} catch (e) {
  console.log(e, 'async에러 가 발생하였습니다')
}
