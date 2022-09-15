https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/

// Big O 

class TreeNode {
  constructor(value) {
    this.val = value
    this.right = null
    this.left = null
  }
}

// 15% faster , 15% less memory -> not too optimize
var pseudoPalindromicPaths  = function(root) {
    function dfs(node, pairs){
      if(!node) return 0;
      
      if(pairs.has(node.val)) 
        pairs.delete(node.val)
      
      else pairs.add(node.val)
      
      if(!node.left && !node.right) {
       if(pairs.size <=1) {
         return 1
       } 
        return 0
      }
      
      return  (dfs(node.left, new Set(pairs)) + dfs(node.right,new Set(pairs)))
      
    }
 return dfs(root,new Set())
};

const root = new TreeNode(2)
root.left = new TreeNode(3)
root.right = new TreeNode(1)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(1)
root.right.left = new TreeNode(2)
root.right.right = new TreeNode(1)

console.log(pseudoPalindromicPaths(root))
