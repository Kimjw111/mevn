const log=console.log
//log('안녕') //안녕
log(false&&false) //false 좌에서 우 ===>연산
log(true&&false) //false
log(true&&false&&console.log('넌날미워할수없어')) //false
log(true&&console.log('넌날미워할수없어')&&true) //넌날미워할수없어 undefined으로 뒤에 true값 보지 않고 undefined값은 콘솔 출력
log(false&&true) //false
log(false&&333) //false
log(true&&true) //true
log(true&&123) //123
log(13&&6)