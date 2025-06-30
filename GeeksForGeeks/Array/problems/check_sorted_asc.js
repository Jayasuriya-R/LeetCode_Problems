function func(a){
    for(let i=0;i<a.length-1;i++){
        if(a[i] <= a[i+1]){
            continue
        }
        else{
            return false
        }
    }
    return true
}
