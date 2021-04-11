class ClassA {
  static typeName: string;
  constructor() { }
  static getFullName() {
    return "ClassA " + ClassA.typeName;
  }
}
const a = new ClassA();
//console.log(a.typeName);
console.log(ClassA.typeName);