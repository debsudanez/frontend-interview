/* EXAMPLES*/

// 1) 

var i = 60;
(function explainVar(){
 for(let i = 0; i < 5; i++){
  console.log(i) 
 }
})(); 
console.log("Despues del loop", i) 

// 2) 

function myFunction() {
    console.log(variable)
    variable = 40
}
console.log(variable)
variable = 27
myFunction()
console.log(variable)
var variable = 37


// 3)

var add = function (x, y) {
    return x + y;
};
// ES6 Arrow function
let add = (x, y) => { return x + y };