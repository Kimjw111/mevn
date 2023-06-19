const express=require('express')
const path=require('path')
const logger=require('morgan')
const app=express()
const PORT=3000
app.use(express.static(path.join(__dirname, '')))
app.use(logger('tiny'))
app.get('',(req,res)=>{
    res.redirect('./index.html')
})


app.listen(PORT,()=>{
    console.log(`너의 서버는? ${PORT}!`)
})