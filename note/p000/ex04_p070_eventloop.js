console.log('hi')
setTimeout(()=>{console.log('async 첫번째 완료')},2)
setTimeout(()=>{console.log('async 두번째 완료')},1)
console.log('안녕하세요')
/*순서
hi
안녕하세요       
async 두번째 완료
async 첫번째 완료 */