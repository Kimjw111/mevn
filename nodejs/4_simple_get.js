const express=require('express')
const app=express()
const loogger=require('morgan')
const PORT=3000
app.use(loogger('tiny'))
const simple_module=require('./4_simple_module')
app.get('/',simple_module.intro)
app.get('/users/:userName/books/:bookName',simple_module.handleBook)
app.listen(PORT,()=>{
    console.log(`서버가 생성되었습니다.${PORT}`)
})
/*{ userName: '승철', bookName: '논어' }
GET /users/%EC%8A%B9%EC%B2%A0/books/%EB%85%BC%EC%96%B4 200 41 - 3.056 ms */