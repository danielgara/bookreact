var NamespaceA;
(function (NamespaceA) {
    class A {
        constructor() {
            this.aname = 'A';
        }
    }
    class B {
        constructor() {
            this.bname = 'B';
        }
    }
    const a = new A();
    const b = new B();
    const c = Object.assign(Object.assign({}, a), b); //spread
    const d = Object.assign(a, b);
    console.log(c);
    console.log(d);
    a.aname = 'a1';
    console.log(c);
    console.log(d);
})(NamespaceA || (NamespaceA = {}));
