Function.prototype.myCall = function (context, ...arr) {
    if (context === null || context === undefined) {
        context = window
    } else {
        context = Object(context)
    }
    const specialPrototype = Symbol('特殊属性Symbol')
    context[specialPrototype] = this
    let result = context[specialPrototype](...arr)
    delete context[specialPrototype]
    return result
}

Function.prototype.myApply = function (context) {
    if (context === null || context === undefined) {
        context = window
    } else {
        context = Object(context)
    }
    function isArrayLike (o) {
        if (o && typeof o === 'object' &&
            isFinite(o.length) && o.length >= 0 &&
            o.length === Math.floor(o.length) &&
            o.length < 4294967296) {
            return true
        } else {
            return false
        }
    }
    const specialPrototype = Symbol('特殊属性Symbol')
    context[specialPrototype] = this
    let arg = arguments[1]
    let result
    if (arg) {
        if (!Array.isArray(arg) && !isArrayLike(arg)) {
            throw new Error('myApply第二个参数不为数组并且不为类数组对象')
        } else {
            result = context[specialPrototype](...arg)
        }
    } else {
        result = context[specialPrototype]()
    }
    delete context[specialPrototype]
    return result
}

Function.prototype.myBind = function (objThis, ...params) {
    const thisFn = this
    let fToBind = function (...secondParams) {
        const isNew = this instanceof fToBind
        const context = isNew ? this : Object(objThis)
        return thisFn.call(context, ...params, ...secondParams)
    }
    fToBind.prototype = Object.create(thisFn.prototype)
    return fToBind
}

