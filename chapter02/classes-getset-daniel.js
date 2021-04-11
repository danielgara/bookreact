// algo que no me gusta es que no se puede poner public class en TypeScript
class Speaker2 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getMessage() {
        if (!this.message.includes(this.name)) {
            throw Error("message is missing speaker's name");
        }
        return this.message;
    }
    setMessage(msg) {
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
