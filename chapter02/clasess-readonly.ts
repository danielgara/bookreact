class Person3 {
  private readonly msg: string;
  
  public constructor(m : string){
    this.msg = m;
  }

  public setMsg(m : string){
    //this.msg = m;
  }

  public speak() {
    console.log(this.msg);
  }
}

const p3 = new Person3("hello");
//p3.msg = "hello";
p3.speak();