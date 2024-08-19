let cartTotal = 0;

let cartItems = [
    {
        productId: 1,
        quantity: 3,
    },
];


cartItems.forEach((cartItem) => {
    cartTotal = cartTotal + cartItem.quantity
})

export { cartItems, cartTotal }
