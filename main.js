//
//
// document.querySelector('.calculate').onclick = calculate;
// function calculate () {
//   var one = document.querySelector('.number1').value;
//   var two = document.querySelector('.number2').value;
//   var out = Number(one) + Number(two);
//
//   calculate.innerHTML= out;
//   console.log(sum);
// }
  //  var number1 = document.querySelector('#number1');

//
// document.querySelector('#calculate').onclick = calculate;
//
// function numbers (){
//   var one = document.querySelector("#number1").value;
//   var two = document.querySelector('#number2').value;
//   var answer = Number(one) + Number(two);
// }
//
// return calculate.output;
//
//
//
//
//get and store the value of the input box
//var oneBox = document.querySelector("userInput");
// get and store the value from this input box too
// document.querySelector("#number2").value;
  // add together and store the values
    //var o = document.querySelector('#o');




 // document.querySelector('.calculate').onclick = calculate;

 document.querySelector('.calculate').addEventListener('click',calculate);

function calculate() {

//    document.getElementById("subm").onclick=function(){
// alert("Hello WOrld");

  var one = document.querySelector(".number1").value;
  var two = document.querySelector('.number2').value;
  var o = Number(one) + Number(two);

document.querySelector('output').innerHTML = o;

    //calculate.innerHTML = o;

  }
// console.log(calculate);
//   // put them in this output box
//calculate.onclick = numbers.value;

//calculate.numbers();
  //calculate.output;
