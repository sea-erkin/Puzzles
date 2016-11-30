/*

https://www.interviewcake.com/question/javascript/second-largest-item-in-bst

Interview cake problem 10. The goal is to get the second largest item in a binary search tree.
In a balanced BST. The max element will be the right most node. The second largest will be either
the parent of the right most node. Or the child of the right nost mode with a left child.
Added aditional methods on the node object to make the final function more readable.

The complexity of this algortithm is o(h) where h is the height of the tree.
In a balanced tree this is o(log(n)) and the space complexity is o(1) because 
we only store a currentNode and overwrite this as we complete our work.

*/

/* Interview Cake Provided Code - Start */
function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

function traverseTree(node) {
    var currentNode = node;
    if (currentNode) {
        traverseTree(currentNode.left);
        console.log(currentNode.value);
        traverseTree(currentNode.right);
    }
}

/* Interview Cake Provided Code - End */
BinaryTreeNode.prototype.hasChild = function() {
    if(this.left || this.right)
        return true;
    else
        return false;
};

BinaryTreeNode.prototype.hasOnlyLeftChild = function() {
    if(this.left && !this.right)
        return true;
    else
        return false;
};

function getMin (rootNode) {
    var currentNode = rootNode;
    while(currentNode.left)
        currentNode = currentNode.left;
    return currentNode.value;
}

function getMax (rootNode) {
    var currentNode = rootNode;
    while(currentNode.right)
        currentNode = currentNode.right;
    return currentNode.value;
 }

function getSecondLargest (rootNode) {
    var currentNode = rootNode;
    
    while(currentNode.hasChild()) {
        if(currentNode.hasOnlyLeftChild()) {
            currentNode = currentNode.left;
            return currentNode.value;
        }
        currentNode = currentNode.right;
    }

    return currentNode.value;
}

/*==============================================================*/
var rootNode = new BinaryTreeNode(10);


rootNode.insertLeft(5);
rootNode.left.insertLeft(5);
rootNode.insertRight(15);
rootNode.right.insertRight(25);
rootNode.right.right.insertLeft(20);

console.log(getMax(rootNode));
console.log(getSecondLargest(rootNode));
