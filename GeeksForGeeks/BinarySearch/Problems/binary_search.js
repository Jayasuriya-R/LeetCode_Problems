function fun(a,k){
    let i = 0
    let j = a.length-1
    while(i<=j){
        let mid = Math.floor((i+j)/2)
        if(k == a[mid]){
            return mid
        }else if(k < a[mid]){
            j = mid-1
        }else{
            i = mid+1
        }
    }
    return -1
}
