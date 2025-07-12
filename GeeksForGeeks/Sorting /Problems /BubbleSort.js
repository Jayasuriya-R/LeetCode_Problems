function bubble(a){
    let n = a.length //6
    for(let i =0; i<n-1;i++){
        for(let j = 0;j<n-i-1;j++){
            if(a[j]>a[j+1]){
                [a[j],a[j+1]] = [a[j+1],a[j]]
            }
        }
    }
    return a
}
