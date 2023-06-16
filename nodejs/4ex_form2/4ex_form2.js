const express=require('express')
const path=require('path')
const logger=require('morgan')
const app=express()
const PORT=3000
const _path=path.join(__dirname, './4ex_dist')
console.log(_path)
app.use('/',express.static(_path))
app.use(logger('tiny'))
app.get('/data',(req,res)=>{
    const arr=[]
    const arr1=['이름','성별','나이','내용','날짜']
    arr.push(req.query.name,req.query.gender,req.query.age,req.query.content,req.query.date)
    let list=''
    list+=`<style>
    body {
      margin: 0;
      padding: 30px;
    }
    .modal {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .modal.show {
      display: block;
    }
    .modal-body {
      position: absolute;
      top: 20%;
      left: 35%;
      min-width: 250px;
      height: 400px;
      padding: 20px;
      text-align: start;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    }
  </style>`
    list+=`<script>
    document.addEventListener("DOMContentLoaded", () => {
      const bt = document.getElementById("ok");
      const modal = document.querySelector(".modal");
      const modalBody = document.querySelector(".modal-body");
      bt.addEventListener("click", () => {
        modal.classList.add("show");
      });
      modal.addEventListener("click", () => {
        modal.classList.remove("show");
      });
    });
  </script>`
    list+=` <div class="modal">
    <div class="modal-body">
        <div class="modal-title">${arr[0]}님이 ${arr[4]}에 접속하셧어요.</div>
    </div>
  </div><br>`
    for(let i =0;i<arr.length;i++){
        list+=`<p>${arr1[i]} = ${arr[i]}</p><br>`
    }
    list+=`<a href="index.html">홈으로</a><br><img src="http://tfjs.site:7905/dog1.jpg"><br><button id="ok">팝업</button>`
res.send(list)
})


app.listen(PORT,()=>{
    console.log(`너의 서버는? ${PORT}!`)
})