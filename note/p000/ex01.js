const arr=Array(100).fill(0).reduce((a,c,i,arr)=>{
    arr[i]=i+1
    return arr
},0)
//a는 누적값,c는 현재값,i는 인덱스,arr은 배열, 뒤에 초기값을 받음
console.log(arr)