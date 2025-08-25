class Node{
    constructor(x){
        this.data = x
        this.next = null
    }
}
class stack{
    constructor(){
        this.head=null
        this.size=0
    }
    size(){
        return this.size
    }
    isEmpty(){
        return this.head === null
    }
    push(x){
        let temp = new Node(x);
        temp.next = this.head
        this.head = temp;
        this.size +=1
    }
    pop(){
        if(this.head == null)return null
        let res = this.head.data
        this.head = this.head.next
        this.size -=1
        return res
    }
    peek(){
        if(this.head == null)return null
        return this.head.data;
    }
};
