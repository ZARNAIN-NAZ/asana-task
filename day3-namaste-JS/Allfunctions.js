//function statement aka function declaration
// function newAny(){

// }
// newAny()

//function expression
// var a  = function(){
   
// }
// a()

// anonymous function
//used as values 
// let z = function (){

// }
// z()

//named function expression
// let myfunc = function xyz(){
//     // console.log(xyz);
//     console.log(xyz());
// }
// myfunc()
 

//difference b/w params and arguments
// var b = function(param1 , param2){
//     // console.log(param1);
//     // console.log(param1,param2);
//     return function  xyz() {
        
//     }
// }
// console.log(b());
// a();
// b(1,2);


//first class funxtion
//the ability of function to used as value
//can be passed to an argument and can be returned from the functions
// function xyz(){

// }
// b(xyz)

// b(1,function(){

// })


// function xyz(){

// }
// console.log(xyz);


// setTimeOut
//also call back function
// setTimeout(function(){
//     console.log("hi");
// } ,9000)

//callBack functions
//first class function citizens 
// work in async manner
// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
// console.log("y");
// });


//DEEP ABOUT EVENT LISTENERS
document.getElementById("clickMe")
addEventListener('click' , function xyz(){
// console.log("hello");
alert("thiss")
// console.log("i am running");
})