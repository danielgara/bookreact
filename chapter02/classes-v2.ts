class Person2 {
  private msg: string;
  
  public constructor(m : string){
    this.msg = m;
  }

  public speak() {
    console.log(this.msg);
  }
}


const luis = new Person2("hello");
//luis.msg = "hello";
luis.speak();