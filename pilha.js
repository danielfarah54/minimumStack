// pilha com métodos push, pop e getMin
var pilha = {
	p: [],
	s: [],
	minEle: -1,
	getMin: function() {
		if (this.s.length == 0)
			return null
		else
			return this.minEle
	},
	pop: function() {
		if(this.s.length == 0)
			return null
		var topo = this.s[this.s.length - 1]
		this.s.pop()
		var r = this.p.pop()
		if(topo < this.minEle) {
			var min = this.minEle
			this.minEle = 2*this.minEle - topo
			return min
		}
		return r
	},
	push: function(x) {
		this.p.push(x)
		if(this.s.length == 0){
			this.minEle = x
			this.s.push(x)
			return
		}
		if(x < this.minEle) {
			this.s.push(2*x - this.minEle)
			this.minEle = x
		} else
			this.s.push(x)
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
