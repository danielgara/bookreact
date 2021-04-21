export default class User {
  private id: string;
  private username: string;
  private description?: string;

  public constructor(id: string, username: string) {
    this.id = id;
    this.username = username;
  }

  public getId(): string {
    return this.id;
  }

  public getUsername(): string {
    return this.username;
  }

  public getDescription(): string {
    if(this.description){
      return this.description;
    }
    return "";
  }

  public setDescription(description:string) {
    this.description = description;
  }
}