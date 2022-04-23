// Getting elements by id for form and table elements
const form = id("sizePicker");
const table = id("pixelCanvas");

// Creating function to get elements by id
function id(id_name){
  return document.getElementById(id_name);
}

// Creating a function to build a paint grid
function makeGrid(event) {
  // Prevent form submission
  event.preventDefault();
  // Clearing the grid
  table.innerHTML = "";
  // Select size input values
  let sizeH = id("inputHeight").value;
  let sizeW = id("inputWidth").value;
  // Creating tr elements according to user's input
  for (i = 0; i < sizeH; i++) {
    let tr = document.createElement('tr');
    // Creating td elements according to user's input
    for (k = 0; k< sizeW; k++) {
      let td = document.createElement('td');
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
  let color = id("colorPicker").value;
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
