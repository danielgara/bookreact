class Person {
  msg!: string;
  
  constructor(){

  }

  speak() {
    console.log(this.msg);
  }
}


const tom = new Person();
tom.msg = "hello";
tom.speak();