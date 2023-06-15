const express=require('express')
const path=require('path')
const logger=require('morgan')
const app=express()
const PORT=3000
const _path=path.join(__dirname, './dist')
console.log(_path)
app.use('/',express.static(_path))
app.use(logger('tiny'))

app.listen(PORT,()=>{
    console.log(`너의 서버는? ${PORT}`)
})