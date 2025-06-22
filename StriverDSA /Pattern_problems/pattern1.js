function print(n){
    let start = 1;
    for(let i =0; i<n;i++){
         i %2 == 0 ? start = 1 : start = 0
        for(let j=0; j<=i;j++){
            process.stdout.write(String(start));
            start = 1-start
        }
        console.log()
    }
}
//
1
01
101
0101
10101
//
