export default class Todo {
  private id: string;
  private message: string;

  public constructor(id: string, message: string) {
    this.id=id;
    this.message=message;
  }

  public getId():string{
    return this.id;
  }

  public getMessage():string{
    return this.message;
  }
}