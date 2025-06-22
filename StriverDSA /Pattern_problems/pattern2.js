function print(n){
   for(let i=1;i<=n;i++){
       for(let j=1;j<=i;j++){
           process.stdout.write(String(j))
       }
       for(let j=1;j<=2*n-2*i;j++){
           process.stdout.write(" ")
       }
       for (let j = i; j >= 1; j--) {
      process.stdout.write(String(j));
    }
       console.log()
   }
}
//
1      1
12    21
123  321
12344321
