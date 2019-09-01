class Vehicle {
  constructor(wheels, speed, color, brand) {
    this.wheels = wheels;
    this.speed = speed;
    this.color = color;
    this.brand = brand;
  }
  start() {
    console.log("Vehicle Started");
  }
  stop() {
    console.log("Vehicle Stopped");
  }
}

class Car extends Vehicle {
  constructor(wheels, speed, color, brand, airbags, hasSunroof) {
    super(wheels, speed, color, brand);
    this.airbags = airbags;
    this.hasSunroof = hasSunroof;
  }
  start() {
    console.log("Car Started");
  }
  slideSunroof() {
    if (this.hasSunroof) {
      console.log("Slided");
    } else {
      console.log("No sun roof");
    }
  }
}

class Bike extends Vehicle {
  constructor(wheels, speed, color, brand, hasStorage) {
    super(wheels, speed, color, brand);
    this.hasStorage = hasStorage;
  }
  start() {
    console.log("Bike Started");
  }
  tilt() {
    console.log("I can tilt");
  }
}
