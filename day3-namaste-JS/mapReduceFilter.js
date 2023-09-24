// // //map used to  transform an array
// // const arr =  [3,4,54,34,3]
// //  //we want to double the array

// //  function double(x){
// //     return x*2
// //  }

// //  //for tripple the array
// //  function tripple(x){
// //     return x*3
// // }

// // //for binary ot that array
// // // function binary(x){
// // //     return x.toString(2)
// // // }



// //  const output = arr.map(double)
// //  const output2 = arr.map(tripple)
// // //  const output3= arr.map(binary)

// // // 2nd way to do same thing
// // // const output3= arr.map(function binary(x){
// // //     return x.toString(2)
// // // })

// // //3rd way to to same thing
// // const arrowFunction=arr.map((x)=>x.toString(2))
// // console.log(arrowFunction);

// //  console.log(output);
// //  console.log(output2);
// // // console.log(output3);


// //filter----------------------------------------
// // used for filtering the value from in array
// const arr = [3,34,2,3]

// //filter all odd values inside an array
// // function odd(x){
// //     return x%2;
// // }

// // const output = arr.filter(odd)
// // console.log(output);

// //filter all even values inside an array
// // function even(x){
// //     return x%2===0;
// // }

// // const output2 = arr.filter(even)
// // console.log(output2);

// //x is >4
// const output = arr.filter((x)=>x>4)
// console.log(output);


///reduce-----------------------------------
//  when  u want to iterate al values and find a result
// const arr = [2,3,3,43,2]
// //sum or max

// function sum(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length;i++){
//         sum+=arr[i]
//     }

//     return sum;
// }
// console.log(sum(arr));

// do the same work with reduce
// const output = arr.reduce(function (acc , curr ) { //accumulator , currentvalue
    //iterate each and every element in an array
//acc works like sum variable og upper on 
// acc+=curr;
// return acc;
// },0)
// console.log(output);

// const arr = [2,3,3,43,2]
// const output  = arr.reduce(function(max,curr){
// if(curr>max){
// max = curr;
// }
// return max;
// },0)
// console.log(output);







//map  reduce tricky example--------------------------------
const users=[
    {firstName:"ali" ,lastName:"sani", age:34},
    {firstName:"alina" ,lastName:"khan", age:24}
    ,{firstName:"aina" ,lastName:"baig", age:64},
    {firstName:"almirah" ,lastName:"sheikh", age:32}

]
//list of full name of users------------>map
// const output = users.map((x)=>x.firstName +" "+x.lastName)
// console.log(output);


//list of full name of users------------>reduce
//how many users have a particular age
const output = users.reduce(function(acc,curr){
if(acc[curr.age]){
    acc[curr.age]=++acc[curr.age];
}else{
    acc[curr.age]=1
}
return acc;

},{})
console.log(output);