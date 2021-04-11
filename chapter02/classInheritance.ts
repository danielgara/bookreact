class Vehicle {
  constructor(private wheelCount: number) { }
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount} miles`);
  }

  public setWheels(n: number){
    this.wheelCount = n;
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(2);
  }
  
  updateWheelCount(newWheelCount: number){
    this.setWheels(newWheelCount);
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorCycle = new Motorcycle();
motorCycle.showNumberOfWheels();
const autoMobile = new Automobile();
autoMobile.showNumberOfWheels();