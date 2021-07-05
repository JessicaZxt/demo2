class Test {
  value: string;
  constructor(value: string) {
    this.value = value
  }
  getValue () {
    return this.value
  }
}

// public 公共属性
class Animal1 {
  public name: string;
  public constructor(name: string) {
    this.name = name
  }
  public move (val: number) {
    console.log(`${this.name}moved${val}`)
  }
}

// private 私有属性
class Animal2 {
  private name: string;
  constructor(name: string) {
    this.name = name
  }
}

// new Animal2('cat').name //属性“name”为私有属性，只能在类“Animal2”中访问。

// protected 受保护的属性
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name
  }
}

class Employee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  public getStr () {
    return `${this.name} + ${this.department}`
  }
}

let p = new Employee('a', 'b')
console.log(p.getStr());
// console.log(p.name);// 属性“name”受保护，只能在类“Person”及其子类中访问。

// readonly 只读
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(name: string) {
    this.name = name
  }
}

let o = new Octopus('a')
// o.name = '123' // 无法分配到 "name" ，因为它是只读属性。

