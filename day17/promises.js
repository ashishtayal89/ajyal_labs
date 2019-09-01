var getNumbers = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve([1, 2, 3, 4, 5]), 5000);
  });
};

var filterRecords = numbers => {
  return numbers.filter(number => {
    return number > 2;
  });
};

var sumOfRecords = numbers => {
  return numbers.reduce((sum, value) => {
    sum = sum + value;
    return sum;
  }, 0);
};

var logFilteredRecords = numbers => {
  console.log(numbers);
};

var userClickToGetNumbers = () => {
  var numberPromise = getNumbers();
  numberPromise.then(sumOfRecords).then(logFilteredRecords);
};

userClickToGetNumbers();
