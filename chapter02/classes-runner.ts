class Runner {
  static lastRunTypeName: string;
  constructor(private typeName: string) { }
  run() {
    Runner.lastRunTypeName = this.typeName;
  }
}
const a1 = new Runner("a");
const b1 = new Runner("b");
b1.run();
a1.run();
console.log(Runner.lastRunTypeName);