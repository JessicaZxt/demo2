function init(value) {
    return value;
}
var initValue = init(123);
var value = init('123');
function identity(arg) {
    return arg;
}
var myIdentity = identity;
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
