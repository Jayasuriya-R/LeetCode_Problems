var maxNumberOfBalloons = function(text) {
    let b = 'balloon'
    let counter = {}
    for(let i of text){
         if (b.includes(i)) {
            counter[i] = (counter[i] || 0) + 1; 
        }
    }
   if (!('b' in counter) || 
        !('a' in counter) || 
        !('l' in counter) || 
        !('o' in counter) || 
        !('n' in counter)) {
        return 0;
        }
        else{
            return Math.min(counter['b'],counter['a'],counter['n'],Math.floor(counter['l']/2), Math.floor(counter['o']/2))
        }
};
