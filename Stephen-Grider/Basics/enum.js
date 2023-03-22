var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["no"] = 0] = "no";
    MyEnum[MyEnum["yes"] = 1] = "yes";
    MyEnum[MyEnum["maybe"] = 2] = "maybe";
})(MyEnum || (MyEnum = {}));
var navi = MyEnum.no;
console.log(navi);
