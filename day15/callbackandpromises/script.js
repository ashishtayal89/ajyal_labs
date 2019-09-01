// USING CALLBACKS

fetch(20, function(result, err) {
  if (err) {
    console.log(err.message);
  } else {
    console.log("fetched " + result.length + " records : ", result);
  }
  fetch(55, function(result, err) {
    if (err) {
      console.log(err.message);
    } else {
      console.log("fetched " + result.length + " records : ", result);
    }
    fetch(10, function(result, err) {
      if (err) {
        console.log(err.message);
      } else {
        console.log("fetched " + result.length + " records : ", result);
      }
    });
  });
});

// USING PROMISES

var logPromiseRecords = function(result) {
  console.log("fetched " + result.length + " records : ", result);
};

var logPromiseError = function(error) {
  console.log(error.message);
};

fetchPromise(20)
  .then(logPromiseRecords, logPromiseError)
  .then(function() {
    return fetchPromise(100);
  })
  .then(logPromiseRecords, logPromiseError)
  .then(function() {
    return fetchPromise(10);
  })
  .then(logPromiseRecords, logPromiseError);

// var obj = {
//   logContext: function() {
//     function a() {
//       console.log(this);
//     }
//     a();
//   }
// };

// var people = [
//   {
//     _id: "5d4890513e7eb372207ac3cb",
//     age: 30,
//     eyeColor: "blue",
//     name: {
//       first: "Holland",
//       last: "Frye"
//     },
//     company: "TSUNAMIA",
//     email: "holland.frye@tsunamia.org",
//     phone: "+971 (942) 412-2572",
//     address: "387 Haring Street, Camptown, Indiana, 1798"
//   },
//   {
//     _id: "5d48905199aeda03d62b7f93",
//     age: 31,
//     eyeColor: "blue",
//     name: {
//       first: "Pugh",
//       last: "Nichols"
//     },
//     company: "NEPTIDE",
//     email: "pugh.nichols@neptide.io",
//     phone: "+971 (961) 557-2098",
//     address: "498 Prospect Avenue, Celeryville, Missouri, 4468"
//   },
//   {
//     _id: "5d48905199f37d0bb54a4d35",
//     age: 39,
//     eyeColor: "blue",
//     name: {
//       first: "Stephens",
//       last: "Wolf"
//     },
//     company: "SENMAO",
//     email: "stephens.wolf@senmao.net",
//     phone: "+971 (960) 589-3701",
//     address: "425 Anna Court, Dunnavant, Oklahoma, 3297"
//   },
//   {
//     _id: "5d4890512998491195bce329",
//     age: 36,
//     eyeColor: "brown",
//     name: {
//       first: "Carmella",
//       last: "Petersen"
//     },
//     company: "QUILM",
//     email: "carmella.petersen@quilm.me",
//     phone: "+971 (964) 401-2672",
//     address: "186 Etna Street, Grandview, South Carolina, 3453"
//   }
// ];

// people
//   .filter(function(person) {
//     return person.age < 35;
//   })
//   .reduce(function(sum, person) {
//     return sum + person.age;
//   }, 0);

var myPromise = fetchPromise(70);
myPromise.then(
  function(records) {
    console.log(records);
  },
  function(error) {
    console.log(error.message);
  }
);
