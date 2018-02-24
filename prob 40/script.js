function checkNumbers(){

let number1 = document.getElementById('input1').value;
let number2 = document.getElementById('input2').value;
let number3 = document.getElementById('input3').value;
let result = null;
console.log (number1);
if (number1==number2 && number2==number3){
    result= 30;
}
if(number1==number2 || number1==number3 || number2==number3){
  result = 40;
}
else{
    result = 20;
}

return document.getElementById('result').innerHTML= result;
}

