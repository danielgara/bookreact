namespace NamespaceA {

  class A {
    aname: string = 'A';
  }

  class B {
    bname: string = 'B';
  }

  const a = new A();
  const b = new B();
  const c = { ...a, ...b } //spread create new object
  const d = Object.assign(a, b); //assing b data into object a

  console.log(c);
  console.log(d);
  a.aname = 'a1';
  console.log(c);
  console.log(d);
}