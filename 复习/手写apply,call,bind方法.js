Function.prototype.myCall = function (context, ...args) {
  context = context || window
  const fn = Symbol('fn')
  context[fn] = this
  context[fn](...args)
  delete context[fn]
}

Function.prototype.myApply = function (context, argsArr) {
  context = context || window
  const fn = Symbol('fn')
  context[fn] = this
  context[fn](...argsArr)
  delete context[fn]
}

Function.prototype.myBind = function (context, ...args) {
  const _this = this
  return function (...childArgs) {
    return _this.myCall(context, ...args, ...childArgs)
  }
}