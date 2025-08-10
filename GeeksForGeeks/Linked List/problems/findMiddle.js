// slow and fast pointer
function findMiddle(head){
    if(head == null)return 0
    let s = head
    let f = head
    while(f!==null && f.next!== null){
        s = s.next
        f = f.next.next
    }
    return s.data
}
