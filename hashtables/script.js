class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        let hash = this._hash(key)
        if (!this.keyMap[hash]) {
            this.keyMap[hash] = []
        }
        this.keyMap[hash].push([key, value])
    }

    get(key) {
        let hash = this._hash(key)
        if (this.keyMap[hash]) {
            for (let i = 0; i < this.keyMap[hash].length; i++) {
                if (key === this.keyMap[hash][i][0]) {
                    return this.keyMap[i][1]
                }
            }
        }
        return undefined
    }
    
    keys() {
        let keys = []
        for (let item of this.keyMap) {
            if (item) {
                for (let pair of item) {
                    if (!keys.includes(pair[0])) {
                        keys.push(pair[0])
                    }
                }
            }
        }
        return keys
    }

    values() {
        let values = []
        for (let item of this.keyMap) {
            if (item) {
                for (let pair of item) {
                    if (!values.includes(pair[1])) {
                        values.push(pair[1])
                    }
                }
            }
        }
        return values
    }
}
    
let hashtable = new HashTable(4)
hashtable.set("chris", 20)
hashtable.set("coco", 5)
hashtable.set("chloe", 53)
hashtable.set("doe", 52)
hashtable.set("doe", 533)
console.log(hashtable.keys())
console.log(hashtable.values())

