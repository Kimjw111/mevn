const express=require('express')
const path=require('path')
const logger=require('morgan')
const fs=require('fs')

const app=express()
const PORT=3000
const _path=path.join(__dirname,'/')
// console.log(_path)
// app.use('/',express.static(_path))
app.use(logger('tiny'))

app.get('/files',(req,res)=>{
    fs.readdir(_path,'utf-8',(err,data)=>{
        //경로, 파일 형식, 콜백(에러났을때, 실제로 받을 데이터)
        let list=''
      data.reduce((a,c,i,arr)=>{
        list+=`<h4 style="color:plum ;">${c}</h4>`
      })
        res.send(list)
    })
})


app.listen(PORT,()=>{
    console.log('listening on port'+PORT)
})