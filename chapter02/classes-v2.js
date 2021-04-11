var Person2 = /** @class */ (function () {
    function Person2(m) {
        this.msg = m;
    }
    Person2.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person2;
}());
var luis = new Person2("hello");
//luis.msg = "hello";
luis.speak();
