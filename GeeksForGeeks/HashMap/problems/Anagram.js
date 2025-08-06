var isAnagram = function(s, t) {
  let m = {};
  let n = {};
  
  if (s.length !== t.length) return false;

  for (let i of s) {
    i in m ? m[i] += 1 : m[i] = 1;
  }

  for (let i of t) {
    i in n ? n[i] += 1 : n[i] = 1;
  }

  for (let ch in m) {
    if (m[ch] !== n[ch]) return false;
  }

  return true;
};
