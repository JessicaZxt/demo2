var valueOne = {
    first: 123,
    second: '4656'
};
var valueTwo = {
    first: 123,
    second: '123'
};
var valueThree = {
    first: 123
};
var valueFour = {
    first: 123,
    third: true
};
var nameFn = function (one, two) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return one + two + rest;
};
nameFn('a', 'b', 'c', 'd');
var valueSet = {
    first: '123',
    getValue: function (val) {
        return val;
    },
    getLowerCaseValue: function (val) {
        return val.toLowerCase();
    }
};
var indexSetting = ['123', '456'];
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 123;
var square = {};
square.color = '#000';
square.penWidth = '20';
square.sideLength = 60;
