function rotateArray(a){
    let j = a[0]
  for(let i =1;i<a.length;i++){
     a[i-1] = a[i]
  }
  a[a.length-1] = j
  return a
}
