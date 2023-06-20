// const d=()=>{return {name:'최주원',job:'마케터'}}
const d=()=>({name:'최주원',job:'마케터'})
const {name}=d()
console.log(name) //최주원
const a2=[1,2]
const[b,c]=a2
console.log(b,c) //1,2
const a3={names:'큰돌',노래:'자취방좋아'}
const{names,노래}=a3
console.log(names,노래) //큰돌, 자취방좋아