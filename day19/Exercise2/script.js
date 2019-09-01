var empData;
var promise = fetch("http://dummy.restapiexample.com/api/v1/employees");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    empData = data;
    createTable(data);
  });

function createTable(records) {
  var table = document.createElement("table");
  table.setAttribute("border", 1);
  table.appendChild(createHeading(records[0]));
  for (let record of records) {
    table.appendChild(createRow(record));
  }
  document.getElementById("container").appendChild(table);
}

function createHeading(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var heading = document.createElement("th");
    heading.innerHTML = prop.toUpperCase();
    row.appendChild(heading);
  }
  return row;
}

function createRow(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var column = document.createElement("td");
    column.innerHTML = record[prop];
    row.appendChild(column);
  }
  return row;
}

function findRecord() {
  var empId = document.getElementById("emp_id").value;
  var ageFrom = document.getElementById("age_from").value;
  var ageTo = document.getElementById("age_to").value;
  document.getElementById("container").innerHTML = "";
  var filtedRecord = empId
    ? empData.filter(
        emp =>
          emp.id.toString().indexOf(empId) != -1 &&
          (emp.employee_age > ageFrom && emp.employee_age < ageTo)
      )
    : empData;
  createTable(filtedRecord);
}

function filterBasedOnId() {}
