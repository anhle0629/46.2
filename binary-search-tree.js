class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    // if the tree is empty, insert it into the root
    if(this.root === null){
      this.root = new Node(val)
      return this
    }

    //otherwise find the correct spot for the new value
    let current = this.root
    while(true){
      if(current < current.val){
        if(current.left === null){
          current.left = new Node(val)
          return this
        }else{
          current = current.left
        }
    }else if(val > current.val){
      if(current.right === null){
        current.right = new Node(val)
        return this 
      }else{
        current = current.right 
      }
    }
  }
}
  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val,current = this.root) {
    if(this.root === null){
      this.root = new Node(val)
      return this
    }

    if(val < current.val){
      if(current.left=== null){
        current.left = new Node(val)
        return this
      }
      return this.insertRecursively(val, current.left)
    }else{
      if(current.right === null){
        current.right = new Node(val)
        return this
      }
      return this.insertRecursively(val, current.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root
    let found = false

    if(val === currentNode) return currentNode
    
    while(currentNode && !found){
      if(val < currentNode){
        currentNode = current.left
      }else if(val > currentNode){
        currentNode = current.right
      }else{
        return found = true 
      }
    }

    if(!found) return undefined;
    return currentNode
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(this.root === null ) return undefined

    if(val < current.val){
      if(current.left === null) return undefined
      return this.findRecursively(val, current.left)
    }else if(val> current.val){
      if(current.right === null) return undefined
      return this.findRecursively(val, current.right)
    }
    return current
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = []
    let current = this.root 

    function transverse(node){
      data.push(node.val) // visit
      node.left && this.transverse(node.left) // go to left if there's a left 
      node.right && this.transverse(node.right) // go to right if there's a right 
    }

    transverse(current)
    return data
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = []
    let current = this.root

    transverse(node){
      node.left && this.transverse(node.left)// go to the left if there's a left
      data.push(node.val)// vist 
      node.right && this.transverse(node.right) // to right if there's a right 
    }
    transverse(current)
    return data 
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = []
    let current = this.root

    transverse(node){
      node.left && this.transverse(node.left) // go to left if there's a left 
      node.right && this.transverse(node.right) // go to right if there's a right 
      data.push(node.val)
    }

    transverse(current)
    return data 
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root
    let queue = [];
    let data = [];

    queue.push(node);

    while(queue.length){
      node = queue.shift()
      data.push(node.val);
      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
    }
    return data

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
