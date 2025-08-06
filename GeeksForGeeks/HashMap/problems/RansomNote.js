var canConstruct = function(ransomNote, magazine) {
    let m ={}
    let n ={}
    for(let i of ransomNote){
        i in m ? m[i] = m[i]+1 : m[i] = 1   
    }
    for(let i of magazine){
        i in n ? n[i] = n[i]+1 : n[i]=1  
    }
    for(let i in m){
        if(!n[i] || m[i] > n[i] ) return false
    }
    return true
};
