//HIGH ORDER FUNCTION............
//a function which takes an other function as an argument 
// or return a functions from it

// function x(){ //x is the cb function

// }
// function y(x) { //y is the hof
//     x()
// }

//introduction of functional programming
// const radius  = [2,4,5,3]
// const calculateArea = function(radius){
//     const output = []
//     for(let i =0;i<radius.length; i++){
//         output.push(Math.PI *radius[i]*radius[i])
//     }
//     return output;
// }
// console.log("area is",calculateArea(radius));

// //now for cicumference..
// const calculateCircumference = function(radius){
//     const output = []
//     for(let i =0;i<radius.length; i++){
//         output.push(2*Math.PI *radius[i])
//     }
//     return output;
// }
// console.log("circumference is ",calculateCircumference(radius));


// //now for diameter...
// const calculateDiameter = function(radius){
//     const output = []
//     for(let i =0;i<radius.length; i++){
//         output.push(2*radius[i])
//     }
//     return output;
// }
// console.log("diameter is",calculateDiameter(radius));





//apply generic function for same upper code
const radius = [2,3,43,2]


//for area
const area = function (radius){
    return Math.PI *radius*radius;
}

//for circumference
const circumference = function (radius){
    return Math.PI *radius;
}

//for diameter
const diameter= function (radius){
    return 2 *radius;
}

const calculate = function(radius , logic){
    const output = [];
    for(let i =0; i<radius.length; i++){
        output.push(logic(radius[i]))

    }
    return output;
}
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

// diameter













