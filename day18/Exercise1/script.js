function createDivUsingInlineCSS() {
  var div = document.createElement("div");
  div.style.background = "red";
  div.style.height = "50px";
  div.style.width = "100px";
  var container = document.getElementById("container1");
  container.appendChild(div);
}

function createDivUsingExternalCSS() {
  var div = document.createElement("div");
  div.className = "redBox";
  var container = document.getElementById("container2");
  container.appendChild(div);
}
