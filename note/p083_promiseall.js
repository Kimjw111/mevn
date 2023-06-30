const async = (message, ret) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(message)
      console.log(new Date())
      res(ret)
    }, 2000)
  })
}

const promises = [async('비동기함수1발동', 1), async('비동기함수2발동', 2)]
Promise.all(promises).then((data) => {
  console.log(data)
}) //promiseall 배열로 넣기
/*비동기함수1발동
2023-06-30T01:27:23.115Z
비동기함수2발동
2023-06-30T01:27:23.117Z
[ 1, 2 ] */
