const http=require('http')//http 모듈을 사용한다
const PORT=3000//서버가 실행되는 포트를 지정
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain;charset=utf-8')//될때도 있고 안될때도 utf-8로 한글 되게
    res.write('첫번째 write') // write 는 여러번 쓸 수 있음
    res.write('두번째 write') 
    res.end('전송 끝1') //send는 한번만
    // res.send('send 전송 끝1')
})
server.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})