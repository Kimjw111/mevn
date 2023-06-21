const a=(c='네이버')=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${c}로부터 받은 사랑`)
        })
    })
}
a().then(ret=>{
    console.log(ret)
    return a(`카카오`)
}).then(ret=>{
    console.log(ret)
})