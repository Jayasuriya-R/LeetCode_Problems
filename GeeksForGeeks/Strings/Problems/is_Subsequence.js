var isSubsequence = function (s, t) {
    let l = 0
    let r = 0
    while (l < t.length && r < s.length) {
        if (t[l] == s[r]) {
            r++
        }
        l++

    }
    return r === s.length
};
