// let arr = [3,6,2,8,7]
function lomutoPartition (arr,l,h){
    let pivot = arr[h]
    let i = l-1
    for (let j=l;j<h;j++){
        if(arr[j]<pivot){
            i++
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
    [arr[i+1],arr[h]] = [arr[h],arr[i+1]]
    return i+1
}
function quickSort(arr,l,h){
    if(l<h){
        let p = lomutoPartition(arr,l,h)
        qS(arr,l,p-1)
        qS(arr,p+1,h)
    }
}
quickSort(arr,0,arr.length-1);
// console.log(arr)
