// https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/

var numberOfWeakCharacters = function(p) {
   p.sort((a,b)=>a[0]===b[0]?a[1]-b[1]:b[0]-a[0])
   
    let min = p[0][1]
    let weak = 0
    for(let i = 1 ; i<p.length;i++){
        
        min <= p[i][1]? min = p[i][1]:weak++
    }
    console.log(weak)
    return weak
};


p = [[5,5],[6,3],[3,6],[1,1]]
numberOfWeakCharacters(p)

