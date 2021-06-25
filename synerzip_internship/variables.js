/*
Names are case-sensitive and may begin with:
     letters, $, _
After, may include
     letters, numbers, $, _
Convention says
     Start with a lowercase word, then additional words are capitalized
     ex. myFirstVariable
*/
var name = "Ajinkya";                 // String w/ double quotes
var occupation = 'Student';     // String w/ single quotes

var age = 20;                      // Integer
var cgpa = 2.5;                     // Floating point number

var isTall;                        // boolean true/false
isTall = true;

name = "Aj";

document.write("Your name is " + name);











/*Casting and Converting*/

document.write( "<br>"+100 + Number("25") + "<br>");
document.write( 100 + parseInt("50") + "<br>");
document.write( 100 + parseFloat("50.99") + "<br>");
















/*using let keyword*/

/*we cannot use let keyword again but we can use it again and again if it is in the {} quotes*/
let  x = 10;
// Here x is 10

{  
  let x = 2;
  // Here x is 2
}

// Here x is 10
document.getElementById(id).innerHTML = x;














/*           Const Keyword


Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.*/


   const PI = 3.14159265359;

   // Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";
// you cannot reassign object //


car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR  */














/*  functions  */



/* Printing the function*/

function sayHi(){
    document.write("Hello");
}




