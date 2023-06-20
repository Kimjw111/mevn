const a=[1,2,3,4,5]
console.log(a.includes(3)) //true 있냐없냐
//const ret=a.indexOf(3)
const ret=a.findIndex(e=>e===3)
console.log(ret) //2 어디에있냐