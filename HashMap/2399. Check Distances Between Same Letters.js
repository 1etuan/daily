var checkDistances = function(s, distance) {
    let map = new Map()
    
    for(let i = 0; i<s.length;i++){
        map.has(s[i]) === false ? map.set(s[i], [i]) : map.get(s[i]).push(i) 
    }
  
    for(let [char,[a,b]] of map){
        if (!(b-a-1 === distance[char.charCodeAt() - 97]))  return false 
    }
    
  return true
};