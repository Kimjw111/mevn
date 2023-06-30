// 정상적인 처리일때
function test(text, time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      typeof text === 'string' ? res('string입니다.') : rej('파악이 안됩니다.')
    }, time)
    console.log(text)
  })
}

// 일반 비동기처리
const testGo = async () => {
  console.time('일반비동기처리')
  await test('코딩', 3000)
  await test('Cording', 2000)
  await test('자바스크립트', 1000)
  await test('Javascript', 1700)
  console.timeEnd('일반비동기처리')
}
testGo()
