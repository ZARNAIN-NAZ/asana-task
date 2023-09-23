// Web apis
// setTimeout----used for timer
// DOM API --used for html document.getelementbyid or else
// fetch --- used for fetching fata from other server
//localStorage -- give localstorage from window
// console-- log something inside console
// location ---https://www.....

//can used "window." by accessing all of upper super powers

//how set time out  works in js
// console.log("start");
// setTimeout(function cb(){
//     console.log("call back");
// } ,2000);
// console.log("end");

//how event listener works in js
// console.log("start");
// document.getElementById("clickMe")
// .addEventListener("click",function cb(){
//     console.log("call back");

// })
// console.log("end");


// how fetch works in js
console.log("start");
setTimeout(function cbT()  {
    console.log("CB set time out");
}, 1000);
fetch("https://api.netflix.com")
.then(function cbF() {
    console.log("CB netflix");
    
})
console.log("end");