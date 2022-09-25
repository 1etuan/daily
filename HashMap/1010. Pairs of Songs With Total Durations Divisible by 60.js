var numPairsDivisibleBy60 = function(time) {
    let map = new Map()
    let count  = 0
    
    for(let i = 0;i<time.length;i++){

        const mod = time[i]%60

        const poss = mod === 0 ? 0 : 60-mod

        count+= map.get(poss) || 0

        map.set(mod,(map.get(mod) ||0) +1)

    }
    return count
};