var promise1 = new Promise(resolve => {
  setTimeout(() => {
    resolve("promise1");
  }, 4000);
});

var promise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve("promise2");
  }, 2000);
});

var promise3 = new Promise(resolve => {
  setTimeout(() => {
    resolve("promise3");
  }, 8000);
});

var promise4 = new Promise(resolve => {
  setTimeout(() => {
    resolve("promise4");
  }, 20000);
});

Promise.all([promise1, promise2, promise3]).then(allResult => {
  console.log(allResult);
});

console.log("I am here");
