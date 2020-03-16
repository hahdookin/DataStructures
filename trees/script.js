class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (value === current.value) return undefined
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                } else {
                    current = current.left
                }
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode
                    return this
                } else {
                    current = current.right
                }
            }
        }
    }

    contains(value) {
        return this.find(value) !== null
    }

    find(value) {
        if (!this.root) return null
        let current = this.root
        let found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true
            }
        }
        return current
    }

    BFS() {
        let queue = []
        let visited = []
        let node = this.root
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            visited.push(node.value)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return visited
    }

    DFSPreOrder() {
        let visited = []
        const helper = node => {
            visited.push(node.value)
            if (node.left) helper(node.left)
            if (node.right) helper(node.right)
        }
        helper(this.root)
        return visited
    }

    DFSPostOrder() {
        let visited = []
        const helper = node => {
            if (node.left) helper(node.left)
            if (node.right) helper(node.right)
            visited.push(node.value)
        }
        helper(this.root)
        return visited
    }

    DFSInOrder() {
        let visited = []
        const helper = node => {
            if (node.left) helper(node.left)
            visited.push(node.value)
            if (node.right) helper(node.right)
        }
        helper(this.root)
        return visited
    }
}

let tree = new BinarySearchTree()

tree.insert(5)
tree.insert(3)
tree.insert(15)
tree.insert(12)
tree.insert(1)
tree.insert(2)
tree.insert(0)

console.log(tree)