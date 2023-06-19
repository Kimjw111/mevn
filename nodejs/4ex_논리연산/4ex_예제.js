const log=console.log
// 1.
log(null||13||undefined) //예상13
//2.
log(log(7)||13||log(0)) //예상13 >7,13
//3.
log(-1&&null&&true) //예상false >null
//4.
log(null||13&&6||2) //예상true >6
//5.
log(null||13&&log(false)||2) //예상null >false,2,undefined