function moveZeroToEnd(a){
  let j =0
  for(let i=0;i<a.length;i++){
      if(a[i] != 0){
          [a[i], a[j]] = [a[j], a[i]];
          j++
      }
  }
  return a
}
