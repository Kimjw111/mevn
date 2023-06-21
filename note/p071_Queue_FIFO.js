class Queue{
    constructor(){
        this.a=[]
    }
    front(){
        if(this.a.lenght===0){
            return console.log('큐가 비었습니다.')
        }else return console.log(this.a[0])
    }
    enqueue(v){
        this.a.push(v)
    }
    dequeue(){
        if(this.a.length===0){
            console.log('큐가 비었습니다.')
            return
        }
        this.a.shift()// 배열에서 맨 앞 지우기
    }
}
const q=new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
for(let i=0;i<6;i++){
   q.front()
   q.dequeue()
}