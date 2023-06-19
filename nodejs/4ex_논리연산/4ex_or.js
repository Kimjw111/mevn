/*boolean 논리연산 */
// console.log(false||false) //false 연산이 왼쪽에서 오른쪽으로 ===> true를 찾는 연산(단락연산)
// console.log(null||undefined||0||false||false) //false null과 undefined는 false값(계산시)
// console.log(null||undefined||0||false||0) //0 마지막 값 반환
// console.log(null||undefined||0||-2||false) //-2 true 값을 반환(-도 true)
// console.log(false||false||1||false||false) //1 1은 true값 반환은 값자체를 보내줌
// console.log(true||false) //true
// console.log(false||true) //true
// console.log(true||true) //true
console.log(false||console.log('야이나쁜놈아')) //야이나쁜놈아 undefined
console.log(true||console.log('야이나쁜놈아')) //true

/*boolean 외 */
// console.log(true||null) //true
// console.log(null||null) //null
// console.log(false||null) //null
// console.log(null||false) //false
// console.log(null||true) //true