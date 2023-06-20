/*let arr=[]
for(let i=1;i<=20;i++){
    arr.push(i)
}
console.log(arr)
let b=0
for(let i=1;i<=arr.length;i++){
    b+=i
}
console.log(b)*/
const arr=Array(10).fill(0).reduce((a,c,i)=>{
    c=i+1
    console.log(c+'+'+a+'='+(a+c))
    return a+c
},0)
console.log(arr)