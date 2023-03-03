function handleKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    convertTemp();
  }
}
function convertTemp() {
  var tempInput = document.getElementById("temp");
  var temp = parseFloat(tempInput.value);
  var unit = document.getElementById("unit").value;
  var result = document.getElementById("result");

  if (isNaN(temp)) {
    alert("Please enter a valid temperature.");
    tempInput.value = ""; // clear the input field
    return;
  }
  if (unit == "celsius") {
    result.value = ((temp * 9/5) + 32).toFixed(2) + " °F";
  } else if (unit == "fahrenheit") {
    result.value = ((temp - 32) * 5/9).toFixed(2) + " °C";
  } else {
    alert("Please select a temperature unit.");
    return;
  }
}
function resetTemp() {
  document.getElementById("temp").value = "";
  document.getElementById("unit").selectedIndex = 0;
  document.getElementById("result").value = "";
}

