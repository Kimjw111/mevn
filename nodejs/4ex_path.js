const express = require('express')
const app = express()
const port = 3000

app.get('/user/:name/:gender/:age/:address/', (req, res) => {
  const params=req.params
  console.log(params)
  res.send('userName:'+params.name+' gender:'+params.gender+' age:'+params.age+' address:'+params.address)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})