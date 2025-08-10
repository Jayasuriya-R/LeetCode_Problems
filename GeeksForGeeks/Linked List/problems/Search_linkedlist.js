function search(head,x){
    let p = 1
    let cur = head
    while(cur!== null){
        if(cur.data === x)return p
        cur = cur.next
        p++
    }
    return -1
}
