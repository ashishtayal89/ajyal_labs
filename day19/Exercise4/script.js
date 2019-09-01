// Part 1

function getPromise() {
  var promise1 = new Promise(resolve => {
    setTimeout(() => {
      resolve("promise1");
    }, 4000);
  });
  return promise1;
}

getPromise().then(result => console.log(result + " from promise then"));

async function resovePromise() {
  var result = await getPromise();
  console.log(result + " from await");
}
resovePromise();
console.log("I am here");

// Part 2

// var promise = fetch("http://dummy.restapiexample.com/api/v1/employees");
// promise
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     empData = data;
//     createTable(data);
//   });

async function getEmployee() {
  var response = await fetch(
    "http://dummy.restapiexample.com/api/v1/employees"
  );
  var data = await response.json();
  console.log(data);
}
getEmployee();
