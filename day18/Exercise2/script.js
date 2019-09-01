var cars = [
  { name: "Lexus", color: "red" },
  { name: "Petrol", color: "white" },
  { name: "BMW", color: "black" },
  { name: "Jaguar", color: "blue" },
  { name: "Merc", color: "grey" }
];

function createCars() {
  var carsDiv = document.createElement("div");
  carsDiv.className = "cars";
  for (let i = 0; i < cars.length; i++) {
    carsDiv.appendChild(createCar(cars[i].name, cars[i].color));
  }
  var container = document.getElementById("container");
  container.appendChild(carsDiv);
}

function createCar(name, color) {
  var car = document.createElement("div");
  car.className = "car";
  car.style.background = color;
  var carName = document.createTextNode(name);
  car.appendChild(carName);
  return car;
}
