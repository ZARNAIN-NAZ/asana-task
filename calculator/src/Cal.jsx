function Add(a,b){
    let sum = a+b;
    return sum;
}
 function Sub(a,b){
 let subtract = a-b;
 return subtract;
}
 function Mul(a,b){
    let multiplication = a*b;
    return multiplication;
   }
   function Divide(a,b){
    let division = a/b;
    division=division.toFixed(2)
    return  division;
   }
   export {Add,Sub,Mul,Divide};