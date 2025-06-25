function find(n){
         n.sort((a,b)=> a-b); //1,2,5,6,10
         let l = n[n.length-1]
         let i = n.length-2
         while(i>=0 && n[i]==l ){
             i--
         }
         return i < 0 ? -1 : i;
}
