function myInstanceof (left, right) {
  left = left.__proto__
  while (true) {
    if (left === null) {
      return false
    }
    if (left === right.prototype) {
      return true
    }
    left = left.__proto__
  }
}