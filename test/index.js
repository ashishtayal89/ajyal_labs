// IIFE

var a = (function() {
  var a = 5;
  return arr => {
    return arr.map(num => num * a);
  };
})();

console.log(a());

// arrow function

var a = {
  name: "Ron",
  logName: () => {
    console.log(this.name);
  }
};

a.logName();

// arrow functions

var a = first => first;
console.log(a(10));

// nested functions

var a = function(a) {
  var factor = a;
  return function(number) {
    return number * factor;
  };
};
console.log(a(10));

// Destructuring, rest and spread

function learnEs(a, ...rest) {
  var [b, ...others] = rest;
  var [first, second] = others;
  var { car } = second;
  console.log(car);
}

learnEs(
  { name: 1, car: 1 },
  { name: 2, car: 2 },
  { name: 3, car: 3 },
  { name: 4, car: 4 }
);

// for in

var a = [1, 2, 3, 4, 5];
for (var b in a) {
  console.log(b);
}
console.log(a[b]);

// bind

var person = { name: "abc" };

function logName() {
  var name = "xyz";
  console.log(this.name);
}

var a = logName.bind(person)();

// setTimeout

function asyncUse(value) {
  return setTimeout(() => console.log(value), 1000);
}

clearTimeout(asyncUse(10));



