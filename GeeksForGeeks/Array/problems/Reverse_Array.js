function reverseArray(a){
    l=0
    r=a.length-1
    while(l!=r || l<r){
        [a[l], a[r]] = [a[r], a[l]];
        l +=1
        r -=1
    }
    return a
}
