const log=console.log
log(!true) //false 
log(!true&&true) //false !먼저 연산
log(true||console.log('내가누구게')&&false) //true &&먼저 연산 우선순위 ! > && > ||