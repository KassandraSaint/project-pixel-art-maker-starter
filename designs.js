// Getting elements by id for form and table elements
var form = document.getElementById("sizePicker");
var table = document.getElementById("pixelCanvas");

// Creating a function to build a paint grid
function makeGrid(event) {
  // Prevent form submission
  event.preventDefault();
  // Select size input values
  var sizeH = document.getElementById("inputHeight").value;
  var sizeW = document.getElementById("inputWidth").value;
  // Creating tr elements according to user's input
  for (i = 0; i < sizeH; i++) {
    var tr = document.createElement('tr');
    // Creating td elements according to user's input
    for (k = 0; k< sizeW; k++) {
      var td = document.createElement('td');
      // Appending td elements to tr elements
      tr.appendChild(td);
    }
    // Appending tr elements to the table
    table.appendChild(tr);
  }
}
// Creating a function to paint cells
function paintCell(event) {
  // Select color input
  var color = document.getElementById("colorPicker").value;
  // If a cell is not painted painting it with a selected color
  if (event.target.style.backgroundColor == "") {
    event.target.style.backgroundColor = color;
  }
  // Deselecting color on second click
  else {
    event.target.style.backgroundColor = "";
  }
}

// Adding event listeners makeGrid and paintCell on load
window.onload = function() {
  form.addEventListener("submit",  makeGrid);
  table.addEventListener("mouseup", paintCell);
};
