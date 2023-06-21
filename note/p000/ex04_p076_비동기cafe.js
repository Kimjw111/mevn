/*주문 받은대로 처리하기
주문1)1.7초만에 아메리카노가 나왔습니다. [1~2초]
주문2)3.5초만에 라떼가 나왔습니다.[2~3.5초]
주문3)4.1초만에 카푸치노 나왔습니다.[3~5초]
주문4)2.2초만에 에스프레소 나왔습니다.[2~3초]*/
const americano=()=>{
    return new Promise((resolve,reject)=>{
        const delay=Math.random()*(2-1)+1
        setTimeout(()=>{
            resolve(console.log(`${delay}초만에 아메리카노가 나왔습니다.`))
        },delay*1000)
    })
}
const latte=()=>{
    return new Promise((resolve,reject)=>{
        const delay=Math.random()*(3.5-2)+2
        setTimeout(()=>{
            resolve(console.log(`${delay}초만에 라떼가 나왔습니다.`))
        },delay*1000)
    })
}
const cappucino=()=>{
    return new Promise((resolve,reject)=>{
        const delay=Math.random()*(5-3)+3
        setTimeout(()=>{
            resolve(console.log(`${delay}초만에 카푸치노가 나왔습니다.`))
        },delay*1000)
    })
}
const espresso=()=>{
    return new Promise((resolve,reject)=>{
        const delay=Math.random()*(3-2)+2
        setTimeout(()=>{
            resolve(console.log(`${delay}초만에 에스프레소가 나왔습니다.`))
        },delay*1000)
    })
}
americano().then(latte).then(cappucino).then(espresso)