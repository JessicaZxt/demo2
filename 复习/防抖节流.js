function debounce (fn, delay) {
  let time
  const later = () => {
    time = setTimeout(() => {
      fn.apply(this)
      time = null
    }, delay)
  }
  return function () {
    if (time) {
      clearTimeout(time)
    }
    later()
  }
}

function throttle (fn, delay) {
  let time, lastTime
  return function () {
    let currentTime = Date.now()
    if (lastTime && currentTime - lastTime < delay) {
      clearTimeout(time)
      time = setTimeout(() => {
        fn.apply(this)
      }, delay)
    } else {
      lastTime = Date.now()
      fn.apply(this)
    }
  }
}