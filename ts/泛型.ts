function init<T> (value: T): T {
  return value
}

let initValue: number = init<number>(123)
let value: string = init<string>('123')

// 泛型接口
interface GenericIdentityFn<T> {
  (arg: T): T
}

function identity<T> (arg: T): T {
  return arg
}

let myIdentity: GenericIdentityFn<number> = identity

// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}

// 泛型约束

// function loggingIdentity1<T> (args: T): T {
//   console.log(args.length); // 类型“T”上不存在属性“length”。
//   return args
// }

interface LengthWith {
  length: number
}

function loggingIdentity2<T extends LengthWith> (arg: T): T {
  console.log(arg.length);
  return arg
}