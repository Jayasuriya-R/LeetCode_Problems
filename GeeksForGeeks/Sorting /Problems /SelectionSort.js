function selection(a){
    let n = a.length //6
    for(let i=0;i<n-1;i++){
        let min_index = i
        for(let j = i+1;j<n;j++){
            if(a[j]< a[min_index]){
                min = j
            }
        }
        [a[min_index],a[i]] = [a[i],a[min_index]]
    }
   return a
}
