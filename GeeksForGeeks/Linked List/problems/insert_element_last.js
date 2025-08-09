function insert(head,x){
    let temp = new Node(x)
    if(head == null){
        return temp
    }
    let cur = head
    while(cur.next !== null){
        cur = cur.next
    }
    cur.next = temp
}
insert(head,30)
insert(head,40)
