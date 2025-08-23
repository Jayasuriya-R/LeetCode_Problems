var isValid = function(s) {
    let st = []
    for(let i=0;i<s.length;i++){
        if(s[i]=='('|| s[i] == '{' || s[i] == '['){
            st.push(s[i])
        }else{
           if(st.lenghth == 0){return false}
           else if(!matching(st[st.length-1],s[i])){
             return false
           }else{
            st.pop()
           }
        }
    }
    return st.length === 0
}
function matching(a,b){
    return ( (a=='(' && b ==')')|| (a=='{' && b =='}')|| (a=='[' && b ==']')) 
}
