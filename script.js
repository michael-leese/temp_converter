
function valInput() {
  
  var val = parseInt(document.getElementById('inputtemp').value, 10);
  
  if (isNaN(val) || val == null){
       alert('No Value Specified');
  } else {
    calc();
  }
}
    
function calc() {
 
  var inputValue = parseInt(document.getElementById('inputtemp').value, 10);
  var selected = document.querySelector("#selector").value;  
  var calculate;
  
  if (selected == "C") {
    calculate = ((inputValue*9)/5 + 32).toFixed(2) + ' F';
  } else if (selected == "F") {
    calculate = (((inputValue - 32)*5)/9).toFixed(2) + ' C';
  } else if (selected == "blank") {
    alert("Pick a Unit Type");
  }
  
 document.querySelector('#outputtemp').innerHTML = '&nbsp  ' + calculate;
}