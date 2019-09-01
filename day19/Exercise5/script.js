// Example 1
// try {
//   var a = 10;
//   a();
//   a();
// } catch (e) {
//   console.log(e);
// }

// var b = 20;
// console.log(b);

// Example 2

// try {
//   try {
//     var obj = {};
//     throw new TypeError("asfasdf");
//   } catch (e) {
//     console.log(e);
//     // if (e.name === "TypeError") {
//     //   console.log(e.message);
//     // } else {
//     //   throw e;
//     // }
//   } finally {
//     console.log("Done");
//   }
// } catch (e) {
//   console.log(e);
// }

// console.log("asdfsdf");

// Example 3

// async function getEmployee() {
//   try {
//     var response = await fetch(
//       "http://dummy.restapiexample.com/api/v1/employes"
//     );
//     var data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// }
// getEmployee();

// Example 4

try {
  try {
    //  throw new RangeError("My Range Error");
    throw new TypeError("My Type Error");
  } catch (e) {
    if (e.name === "RangeError") {
      console.log("Handled Inside : " + e.message);
    } else {
      throw e;
    }
  }
} catch (e) {
  if (e.name === "TypeError") {
    console.log("Handled Outside : " + e.message);
  }
} finally {
  console.log("Done Finally");
}

// Q1
try {
  try {
    throw "This is the inner error";
    throw "This is the outer error";
  } catch (e) {
    if (typeof e === "object") {
      console.log(e);
    } else {
      throw e;
    }
  } finally {
    console.log("Finally inner");
  }
} catch (e) {
  console.log(e);
} finally {
  console.log("Finally outer");
}
