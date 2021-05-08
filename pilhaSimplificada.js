// pilha com métodos push, pop e getMin
var pilha = {
	p: [],
	minEle: Number.MAX_SAFE_INTEGER,
	push: function(x) {
		this.p.push(x)
		if (x < this.minEle) {
			this.minEle = x
		}
	},
	pop: function() {
		if (this.p.length == 0) {
			return null
		}
		var x = this.p.pop()
		if (x == this.minEle) {
			this.minEle = Math.min(...this.p)
		}
		return x
	},
	getMin: function() {
		if (this.p.length == 0) {
			return null
		}
		return this.minEle
	}
}

// main:
pilha.push(3)
pilha.push(5)
console.log("Pilha: [" + pilha.p + "]. Min: " + pilha.getMin())
pilha.push(2)
pilha.push(1)
console.log("Pilha: [" + pilha.p + "]. Min: " + pilha.getMin())
pilha.pop()
console.log("Pilha: [" + pilha.p + "]. Min: " + pilha.getMin())
pilha.pop()
console.log("Pilha: [" + pilha.p + "]. Min: " + pilha.getMin())