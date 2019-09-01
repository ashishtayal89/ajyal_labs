var numbers = [{ value: 1 }, { value: 2 }, { value: 3 }];

var outerDiv = document.createElement("div");
for (let i = 0; i < numbers.length; i++) {
  var div = document.createElement("div");
  div.innerHTML = numbers[i].value;
  outerDiv.appendChild(div);
}

var container = document.getElementById("container");
container.appendChild(outerDiv);
