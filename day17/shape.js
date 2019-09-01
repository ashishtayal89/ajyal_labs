class Shape {
  constructor(type) {
    this.type = type;
  }
  area() {
    console.log("Calculates area of " + this.type);
  }
}

class Circle extends Shape {
  constructor(radius, type) {
    super(type);
    this.radius = radius;
  }
  area() {
    return 3.14 * (this.radius * this.radius);
  }
}

class Square extends Shape {
  constructor(side, type) {
    super(type);
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}
