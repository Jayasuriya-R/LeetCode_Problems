function func(a) {
  let l = 0;
  let r = a.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (a[mid] === 1) {
      if (mid === 0 || a[mid - 1] !== 1) {
        return a.length - mid;
      } else {
        r = mid - 1;
      }
    } else {
      l = mid + 1;
    }
  }

  return 0; // no 1s found
}
