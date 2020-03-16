// Queues are FIFO
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null 
        this.size = 0
    }
    enqueue(value) {
        let newNode = new Node(value)
        if (!this.size) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue() {
        if (!this.first) return null
        let temp = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
        }
        this.size--
        return temp.value
    }
}

let q = new Queue()

q.enqueue(1)
q.enqueue(2)
console.log(q)
q.dequeue()
q.dequeue()
console.log(q)