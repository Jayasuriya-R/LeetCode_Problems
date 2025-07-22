var mergeAlternately = function(word1, word2) {
    let i =0
    let j =0
    let merge = ''
    while(i < word1.length && j < word2.length ){
     merge += word1[i++];
    merge += word2[j++];
    }
    while(i < word1.length) {
         merge += word1[i++];
        }
        while(j < word2.length) {
        merge += word2[j++]
        }
        return merge
};
