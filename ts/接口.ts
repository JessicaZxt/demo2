// 接口 interface只提供类型检查，不提供具体实现
interface ValueOne {
  first: number;
  second: string;
}

let valueOne: ValueOne = {
  first: 123,
  second: '4656'
}

let valueTwo: { first: number, second: string } = {
  first: 123,
  second: '123'
}

// 接口：可选属性
interface ValueThree {
  first?: number;
  second?: string;
}

let valueThree: ValueThree = {
  first: 123
}

// let valueFour: ValueThree = {
//   third: 123
// } //不能将类型“{ third: number; }”分配给类型“ValueThree”。对象文字可以只指定已知属性，并且“third”不在类型“ValueThree”中

// 接口 ：只读属性

interface ValueFour {
  first?: number;
  second?: string;
  readonly third?: boolean
}

let valueFour: ValueFour = {
  first: 123,
  third: true
}

// valueFour.third = false // 无法分配到 "third" ，因为它是只读属性。

// 接口：用来声明函数
interface CombineNames {
  (first: string, second: string, ...restArr: string[]): string
}

let nameFn: CombineNames = (one: string, two: string, ...rest: string[]): string => {
  return one + two + rest
}

nameFn('a', 'b', 'c', 'd')

// 接口：接口里的函数 声明某一个属性为function，它由属性名+参数列表+返回值
interface ValueSet {
  first: string;
  getValue (val: string): string;
  getLowerCaseValue (val: string): string;
}

let valueSet: ValueSet = {
  first: '123',
  getValue (val: string) {
    return val
  },
  getLowerCaseValue (val: string) {
    return val.toLowerCase()
  }
}

// 接口：索引签名
interface IndexSetting {
  [index: number]: string
}

let indexSetting: IndexSetting = ['123', '456']

// 接口：混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset (): void;
}

function getCounter (): Counter {
  let counter = <Counter>function (start: number) { }
  counter.interval = 123
  counter.reset = function () { }
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 123

// 接口：接口之间的继承
interface Shape {
  color: string
}

interface PenStroke {
  penWidth: string
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = <Square>{}
square.color = '#000'
square.penWidth = '20'
square.sideLength = 60