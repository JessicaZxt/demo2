/*
js：弱类型语言
ts: js的超集，好处：可以进行类型判断，提前暴露代码的错误，代码更智能准确，重构更牢靠

强类型语言：强类型定义语言，不能随意进行隐式类型的转换
弱类型语言：指的是数据类型可以被忽略的语言，允许任意的隐式类型的转换

静态类型：定义后不能随意修改变量类型
动态类型：变量在运行过程中才能确定类型，变量类型可以随意转换
*/


/*
ts的数据类型
*/

// string -----------------------------------
let str: string = '123'

str = '456'
// str = 123 // 提示报错 不能将类型“number”分配给类型“string”


// number -----------------------------------
let num: number = 123

num = 456
// num = '123' // 提示报错 不能将类型“string”分配给类型“number”


// boolean -----------------------------------
let boo: boolean = true

boo = false
// boo = 123 // 提示报错  不能将类型“number”分配给类型“boolean”。

// undefined -----------------------------------
let undefined1: undefined = undefined

// undefined1 = 123 // 提示报错  不能将类型“123”分配给类型“undefined”。

// null -----------------------------------
let null1: null = null

// null1 = 123 // 提示报错  不能将类型“123”分配给类型“null”。


// array -----------------------------------

// 1. Array<元素类型>
let arr: Array<number> = [1, 2, 3]

// 2. 元素类型[]
let arr1: string[] = ['1', '2', '3']

// 3. 元组 Tuple (已知元素数量和类型的数组)
let arr2: [string, number] = ['1', 2]


// function -----------------------------------

// 给每个参数添加类型之后再为函数本身添加返回值类型
let myAdd = function (x: number, y: number): number { return x + y }
//  ts函数只要类型匹配对，就是有效函数类型，不在乎参数名称是否正确
let myAdd1: (baseValue: number, increment: number) => number = function (x: number, y: number) { return x + y }
// ts里面 形参跟实参必须数量一致，在没使用可选参数，默认参数，剩余参数的情况下
function buildName (firstName: string, lastName: string) {
    return firstName + ' ' + lastName
}

buildName('a', 'b')
// buildName('a', 'b', 'c') // 应有 2 个参数，但获得 3 个
// buildName('a') // 应有 2 个参数，但获得 1 个

// 可选参数
function buildName1 (firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName
    } else {
        return firstName
    }

}

buildName1('a') // a
buildName1('a', 'b') // a b
// buildName1('a', 'b', 'c') //应有 1-2 个参数，但获得 3 个。

// 默认参数
function buildName2 (firstName: string, lastName: string = 'tom') {
    return firstName + ' ' + lastName
}

buildName2('a') // a tom
buildName2('a', 'b') // a b
// buildName1('a', 'b', 'c') //应有 1-2 个参数，但获得 3 个。

// 剩余参数
function buildName3 (firstName: string, ...restOfName: string[]): string {
    return firstName + ' ' + restOfName.join(' ')
}
let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");

// object  -----------------------------------
let value: object = {}
// value = 123 //不能将类型“number”分配给类型“object”。

let value1: { first: string, second: number } = {
    first: '123',
    second: 123
}

// enum(枚举) -----------------------------------

// 数字枚举 - 如果其余成员没有赋值，它的值为上一个枚举成员的值+1
enum Direction {
    Up = 1,
    Down,
    Left = 10,
    Right
}

// 字符串枚举 - 所有成员必须使用字符串字面量
enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// 异构枚举 - 可以混合字符串和数字成员
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = 'YES'
}

// any -----------------------------------
let val: any = 1
val = '1'
val = true

// void -----------------------------------
// 函数没有返回值的时候一般都是void
function getName (): void {
    console.log('1111');
}

// never -----------------------------------
// 抛出error异常
function error (message: string): never {
    throw new Error(message)
}

// 不会有返回值的函数表达式 或 箭头函数表达式的返回值类型
function fail () {
    return error('something failed')
}

// 被永不为真的类型保护所约束的变量
function infiniteLoop (): never {
    while (true) {

    }
}
