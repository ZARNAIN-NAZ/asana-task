//e-commerce example
const cart = ["shoes" , "pants" , "watches"]
createOrder(cart , function (orderId) {
    proceedToPayment(orderId); //this method have issue of inversion control
});//cart

// then we solve it through promises
const promise = createOrder(cart);
promise.then(function (orderId) {
    proceedToPayment(orderId)
    
})
