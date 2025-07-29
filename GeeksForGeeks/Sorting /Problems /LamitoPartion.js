function lomutoPartition (arr){
    let l = 0
    let h = arr.length -1
    let pivot = arr[h]
    let i = l-1
    for (let j=0;j<h;j++){
        if(arr[j]<pivot){
            i++
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
    [arr[i+1],arr[h]] = [arr[h],arr[i+1]]
    return [arr, i+1]
}
// part of quick sort
