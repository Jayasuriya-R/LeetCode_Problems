function mergeSort(arr,l=0,r=arr.length-1){
    if(l>=r) return;
    
    let mid = Math.floor((l+r)/2)
    mergeSort(arr,l,mid)
    mergeSort(arr,mid+1,r)
    merge(arr,l,mid,r)
}
<--->
function merge(arr,l,mid,r){
let temp = []
let i = l;
let j = mid+1
while(i<=mid && j <=r ){
    if(arr[i]<arr[j]){
        temp.push(arr[i])
        i++
    }else{
        temp.push(arr[j])
        j++
    }
}
while(i<=mid){temp.push(arr[i]); i++}
while(j<=r){temp.push(arr[j]); j++}
for(let k =0;k<temp.length;k++){arr[l+k] = temp[k]}
}

