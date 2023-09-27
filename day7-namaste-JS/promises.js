// e-commerce example
// const cart = ["shoes", "pants", "watches"];
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   }); //this method have issue of inversion control
// }); //cart

// then we solve it through promises
// const promise = createOrder(cart);
// promise.then(function (orderId) {
//     proceedToPayment(orderId , function (paymentInfo){
//         showOrderSummary(paymentInfo)

//     })

// }),
// createOrder(cart)
// //   .then(function (orderId) {
//     .then(orderId=>proceedToPayment(orderId)) //same as upper one with diff syntax
// //    return proceedToPayment(orderId);
// //   })
//   .then(function (paymentInfo) {
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function (paymentInfo) {
//     return showOrderSummary(paymentInfo);
//   });

//fetch function
//promise object in browser

// const gitHub = "https://github.com/ZARNAIN-NAZ"
// const user =  fetch(gitHub);
// console.log(user);
// user.then(function(data){
//     console.log(data);
// })

//"promise is an object that represents eventual completion of an async
// operation"

// ----------------------------------part2-------------------------
const cart = ["shoes", "watches", "pants"];
const promise = createOrder(cart); //order
console.log(promise);
promise.then(function (orderId) {
  console.log(orderId);
  //   proceedToPayment(orderId);
})
.catch(function (err){
    console.log(err.meassage);
})
//producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //create order
    //validate cart
    //    order id
    if (!validateCart(cart)) {
      const err = new Error("CART is not valid");
      reject(err);
    }

    // logic for createorder
    const orderId = "87";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}
function validateCart(cart) {
  return true
}
