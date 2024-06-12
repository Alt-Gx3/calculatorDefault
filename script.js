let display = document.getElementById("display");

function key(input) {
  display.value += input;
}

function clearDisp(){
  display.value = "";
}

function equals(){
  try{
    display.value = eval(display.value); 
  }
  catch(error){
    display.value = "error"
  }
}
