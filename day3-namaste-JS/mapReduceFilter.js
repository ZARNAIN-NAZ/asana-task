// //map used to  transform an array
// const arr =  [3,4,54,34,3]
//  //we want to double the array

//  function double(x){
//     return x*2
//  }

//  //for tripple the array
//  function tripple(x){
//     return x*3
// }

// //for binary ot that array
// // function binary(x){
// //     return x.toString(2)
// // }



//  const output = arr.map(double)
//  const output2 = arr.map(tripple)
// //  const output3= arr.map(binary)

// // 2nd way to do same thing
// // const output3= arr.map(function binary(x){
// //     return x.toString(2)
// // })

// //3rd way to to same thing
// const arrowFunction=arr.map((x)=>x.toString(2))
// console.log(arrowFunction);

//  console.log(output);
//  console.log(output2);
// // console.log(output3);


//filter----------------------------------------
// used for filtering the value from in array
const arr = [3,34,2,3]

//filter all odd values inside an array
// function odd(x){
//     return x%2;
// }

// const output = arr.filter(odd)
// console.log(output);

//filter all even values inside an array
// function even(x){
//     return x%2===0;
// }

// const output2 = arr.filter(even)
// console.log(output2);

//x is >4
const output = arr.filter((x)=>x>4)
console.log(output);