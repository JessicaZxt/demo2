Array.prototype.map = function (fn) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i], i, this))
  }
  return arr
}

Array.prototype.filter = function (fn) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    fn(this[i]) && arr.push(fn(this[i], i, this))
  }
  return arr
}

Array.prototype.some = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      return true
    }
  }
  return false
}

Array.prototype.every = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (!fn(this[i])) {
      return false
    }
  }
  return true
}

Array.prototype.find = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) return this[i]
  }
}

Array.prototype.forEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this)
  }
}

Array.prototype.reduce = function (fn, prev) {
  for (let i = 0; i < this.length; i++) {
    if (typeof prev === 'undefined') {
      prev = fn(this[i], this[i + 1], i, this)
      ++i
    } else {
      prev = fn(prev, this[i], i, this)
    }
  }
  return prev
}