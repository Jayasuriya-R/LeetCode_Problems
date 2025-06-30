function func(a){
    let fl = -1
    let sl = -1
    for (let i=0;i<a.length;i++){
        if(a[i]>fl){
            sl = fl;
            fl = a[i]
        }
        if(a[i]>sl && a[i]<fl){
            sl  = a[i]
        }
    }
    return a.indexOf(sl)
}
