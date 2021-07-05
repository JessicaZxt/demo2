function create (proto) {
  function Fn () { }
  Fn.prototype = proto
  return new Fn()
}
