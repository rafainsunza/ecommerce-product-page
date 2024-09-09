const cart = {}

function addToCart(productId, productQuantity) {
    productId in cart ?
        cart[productId].quantity += productQuantity :
        cart[productId] = {
            quantity: productQuantity
        }
}

function removeFromCart(productId) {
    delete cart[productId]

}

export { cart, addToCart, removeFromCart }

