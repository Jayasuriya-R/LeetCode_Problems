class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
let head = new Node(10)
head.next = new Node(20)
head.next.next = new Node(30)
function print(head){
   if(head == null) return
   console.log(head.data)
   print(head.next)
   
}
print(head)
