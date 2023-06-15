const express = require('express')
const app = express()
const port = 3000

app.get('/user', (req, res) => {
  let url_name=req.param('name')
  let url_gender=req.param('gender')
  let url_age=req.param('age')
  let url_address=req.param('address')
  res.send('userName:'+url_name+' gender:'+url_gender+' age:'+url_age+' address:'+url_address)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})