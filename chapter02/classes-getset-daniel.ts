// algo que no me gusta es que no se puede poner public class en TypeScript
class Speaker2 {
  private name: string;
  private message!: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName() : string{
    return this.name;
  }

  public setName(name : string){
    this.name = name;
  }

  public getMessage() : string{
    if (!this.message.includes(this.name)) {
      throw Error("message is missing speaker's name");
    }
    return this.message;
  }

  public setMessage(msg : string){
    let tmpMessage = msg;
    if (!msg.includes(this.name)) {
      tmpMessage = this.name + " " + msg;
    }
    this.message = tmpMessage;
  }
}

let speaker2 = new Speaker2("john");
speaker2.setMessage("hello");
console.log(speaker2.getMessage());