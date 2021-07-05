var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Test = /** @class */ (function () {
    function Test(value) {
        this.value = value;
    }
    Test.prototype.getValue = function () {
        return this.value;
    };
    return Test;
}());
// public 公共属性
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    Animal1.prototype.move = function (val) {
        console.log(this.name + "moved" + val);
    };
    return Animal1;
}());
// private 私有属性
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    return Animal2;
}());
// new Animal2('cat').name //属性“name”为私有属性，只能在类“Animal2”中访问。
// protected 受保护的属性
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getStr = function () {
        return this.name + " + " + this.department;
    };
    return Employee;
}(Person));
var p = new Employee('a', 'b');
console.log(p.getStr());
// console.log(p.name);// 属性“name”受保护，只能在类“Person”及其子类中访问。
// readonly 只读
var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.numberOfLegs = 8;
        this.name = name;
    }
    return Octopus;
}());
var o = new Octopus('a');
// o.name = '123' // 无法分配到 "name" ，因为它是只读属性。
