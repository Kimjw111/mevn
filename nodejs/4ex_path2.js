const express = require('express')
const app = express()
const port = 3000

app.get('/user/:id', (req, res) => {
  const obj=req.params
  console.log(obj)
  const arr=['my life is eggs','the Avengers are back','javascript is good enough']
  // res.send('<h1>글자가 커질까요?</h1>')//innerHTML형식으로 들어감
  const str=` <body>
  <a href="/user/0">Life</a>
  <a href="/user/1">Hero</a>
  <a href="/user/2">Javascript</a>
  <h1>${arr[obj.id]??'버튼을 눌러주세요.'}</h1>
</body>`
  res.send(str)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})