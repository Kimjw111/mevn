const a=(c='나가자')=>{
    return new Promise((resolve,reject)=>{//매개변수2개받아서 첫번째거 성공했을때 두번째거 실패했을때
        setTimeout(()=>{
            resolve(`${c}`)//promise안에서 return과 같은역할
        },1500)
    })
}
a().then((result)=>{
    console.log(result)
    return a('싸우자')
}).then((result)=>{
    console.log(result)
    return a('이기자')
}).then((result=>{
    console.log(result)
}))