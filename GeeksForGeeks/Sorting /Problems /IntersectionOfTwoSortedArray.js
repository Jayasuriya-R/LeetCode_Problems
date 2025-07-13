function interscetion(a,b){
   let m = a.length,n = b.length
   let i =0,j=0
   while(i<m && j<n){
       if(i>0 && a[i] == a[i-1]){
           i++
       }else if(a[i]<b[j]){
           i++
       }else if(a[i]>b[j]){
           j++
       }else{
           console.log(a[i])
           i++
           j++
       }
   }
}
