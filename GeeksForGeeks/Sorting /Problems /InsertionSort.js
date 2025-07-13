function insertion(a){
    n= a.length
    for(let i =1; i<n;i++){ //3
        let key = a[i] //1
        let j = i-1 //2
        while(j>=0 && a[j] > key){ //6>1
        a[j+1] = a[j]
            j--
        }
        a[j+1] = key
    }
    return a
}
