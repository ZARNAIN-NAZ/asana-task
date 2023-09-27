// e-commerce example
const cart = ["shoes", "pants", "watches"];
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  }); //this method have issue of inversion control
}); //cart

// then we solve it through promises
// const promise = createOrder(cart);
// promise.then(function (orderId) {
//     proceedToPayment(orderId , function (paymentInfo){
//         showOrderSummary(paymentInfo)

//     })

// }),
createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then(function (orderId) {
    showOrderSummary(orderId);
  });

//fetch function
//promise object in browser

// const gitHub = "https://github.com/ZARNAIN-NAZ"
// const user =  fetch(gitHub);
// console.log(user);
// user.then(function(data){
//     console.log(data);
// })
