/* debounce  Throttle*/
function debounce(func, delay, action = true) {
    /* 定义计时器，执行函数的方法 */
    let timer, context
    const later = () => setTimeout(() => {
        timer = null
        if (action) {
            func.apply(context)
            context = null
        }
    }, delay)

    return function () {
        /* 如果没有定时器，并且action是false，则立刻执行函数，否则就保存this*/
        if (!timer) {
            timer = later()
            if (!action) {
                func.apply(this)
            } else {
                context = this
            }
        } else {
            /* 如果定时器已经存在，则清空定时器，开启下一轮 */
            clearTimeout(timer)
            timer= later()
        }
    }
}
function Throttle(fun, delay) {
    let timer, last
    return function () {
        /* 记录此刻时间 */
        let now = new Date()
        /* 如果此时调用时间与上次调用时间相隔在定时器执行时间之内，则清空定时器，重新加载 */
        if (last && now - last < delay) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                last = new Date()
                fun.apply(this)
            }, delay)
        } else {
            /* 如果不在，则保留这次时间，立刻执行函数 */
            last = new Date()
            fun.apply(this)
        }
    }
}