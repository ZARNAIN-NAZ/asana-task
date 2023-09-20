// function a(){
//     var  r =0;
//     function b(){
// console.log(r);
//     }
//     b()
// }
// a()


// function a(){
//     var  r =0;
// //    return function b(){
//     function b(){
// console.log(r);
//     }
//     r=90;
//      return b;
    
// }
// var z = a()
// console.log(z);
// z()

function z(){
    var e=900
    function a(){
        var  r =0;
    //    return function b(){
        function b(){
    console.log(r, e);
        }
        // r=90;
        //  return b;
      b()
    }
    // var z = a()
    // console.log(z);
    a()
    z()
}



//closures a function within a scope.
// uses 
// module design pattern
currying
// functions like once 
// memoize
// maintaining state in async world 
// setTimeout
// Iterator
// and many more 