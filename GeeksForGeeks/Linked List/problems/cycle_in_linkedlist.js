// slow and fast pointer
var hasCycle = function(head) {
    let dummy = new ListNode()
    dummy.next = head
    let s = dummy, f = dummy
    while(f && f.next){
        f = f.next.next
        s = s.next
        if(f == s){
            return true
        }
    }
return false
};
