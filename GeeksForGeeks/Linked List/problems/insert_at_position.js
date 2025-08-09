function insertAtPoint(head, p, val) {
    let temp = new Node(val);
    if (p === 1) { // Insert at start
        temp.next = head;
        return temp;
    }
    let cur = head;
    for (let i = 0; i < p - 2 && cur !== null; i++) {
        cur = cur.next;
    }
    if (cur === null) {
        console.log("Position out of range");
        return head;
    }
    temp.next = cur.next;
    cur.next = temp;
    return head;
}
