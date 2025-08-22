var calPoints = function(operations) {
    let st = []
    let sum = 0
    for(let i=0;i<operations.length;i++){
        if(operations[i] === 'C'){
            st.pop()
        }else if(operations[i] === 'D'){
            st.push(2*st[st.length-1])
        }else if(operations[i] === '+'){
            st.push(st[st.length-2]+ st[st.length-1])
        }else{
            st.push(Number(operations[i]))
        }
    }
    for(let j=0;j<st.length;j++){
        sum += st[j]
    }
    return sum
}
