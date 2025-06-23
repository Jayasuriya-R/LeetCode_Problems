function print(n){
    for(let i=0;i<n;i++){
        for(let j=1;j<=n-i;j++){
            process.stdout.write("*")
        }
        for(let j=1;j<=i*2;j++){
            process.stdout.write(" ")
        }
        
        for(let j=1;j<=n-i;j++){
            process.stdout.write("*")
        }
        console.log()
    }
    
}
function print1(n){

    for(let i=0;i<n;i++){
        for(let j=0;j<=i;j++){
            process.stdout.write("*")
        }
        for(let j=0;j<n*2-(i+1)*2;j++){
            process.stdout.write(" ")
        }
        
        for(let j=0;j<=i;j++){
            process.stdout.write("*")
        }
        console.log()
    }
    
}
//
********************
*********  *********
********    ********
*******      *******
******        ******
*****          *****
****            ****
***              ***
**                **
*                  *
*                  *
**                **
***              ***
****            ****
*****          *****
******        ******
*******      *******
********    ********
*********  *********
********************
