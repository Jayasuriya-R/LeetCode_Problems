function removeDup(head){
    let cur = head
    while(cur!=null && cur.next != null){
        if(cur.data === cur.next.data){
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }
    }
    return head
}
