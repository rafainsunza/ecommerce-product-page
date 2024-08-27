import html from './shopping-cart.html';
import style from './shopping-cart.sass';
import deleteItemIcon from '../../assets/icon-delete.svg';
import { product_data } from '../../data/product-data.js'
import { cartItems, cartTotal } from '../../js/global-variables.js';

const template = document.createElement('template');
const componentStyle = `
    a {
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        font-family: 'Kumbh Sans';
        margin: 0;

    }

    .hidden {
        display: none;
    }
`;

const cartContainerStyle = `
    .cart-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;

        top: calc(100% + 15px); 
        left: 50%;
        transform: translateX(-50%);

        min-height: 250px;
        max-width: 350px;
        min-width: 300px;
        width: 100%;

        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        background-color: hsl(0, 0%, 100%);
        color: hsl(220, 13%, 13%);
    }

    .cart-container.hidden {
        display: none;
    }
`;

const cartContentStyle = `
    .cart-header {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        font-weight: 700;

        padding: 25px 15px;
    }

    .cart-body {
        padding: 20px 20px 0 20px;
    }

    .cart-footer {
        padding: 0 20px 20px 20px;
        height: 70px;
    }

    .product-data {
        display: flex;
        margin-bottom: 20px;
    }

    .cart-thumbnail {
        width: 50px;
        border-radius: 5px;
    }

    .product-title-and-price {
        display: flex;
        flex-direction: column;

        padding: 5px 15px;
    }

    .product-title {
        color: hsl(219, 9%, 45%);

        margin: 0;
    }   
        
    .price {
        display: flex;

        margin-top: auto;

        font-weight: 500;
    }

    .product-price {
        display: flex;

        color: hsl(219, 9%, 45%);
    }

    .product-quantity {
        color: hsl(219, 9%, 45%);

        margin: 0 5px;
    }
    
    .total-price {
        display: flex;

        font-weight: 700;
    }

    .remove-cart-item-btn {
        display: flex;
        align-items: center;
    }

    .checkout-btn {
        display: flex;
        justify-content: center;

        font-weight: 700;
        font-size: 16px;

        padding: 15px;

        border-radius: 7.5px;
        background-color: hsl(26, 100%, 55%);
    }

    .checkout-btn:hover {
        cursor: pointer;
    }
    
    .empty-cart {
        text-align: center;
        color: hsl(219, 9%, 45%);
        font-weight: 700;

    }
`;

const cartBtnStyle = `
    .cart-btn {
        position: relative;
    }

    .cart-total {
        position: absolute;
        top: -7.5px;
        right: -7.5px;

        padding: 1px 8px;
        border-radius: 15px;

        background-color: hsl(26, 100%, 55%);

        color: hsl(0, 0%, 100%);
        font-weight: 700;
        font-size: 10px;
    }

 `;

template.innerHTML = `
    <style>
        ${componentStyle}
        ${cartContainerStyle}
        ${cartContentStyle}
        ${cartBtnStyle}
    </style>

    ${html}
`;

class ShoppingCart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const cartContainer = this.shadowRoot.querySelector('.cart-container');
        const cartBtn = this.shadowRoot.querySelector('.cart-btn');
        let cartContent = [];

        this.updateCartContent(cartItems, cartContent);
        this.displayCartContent(cartContent);



        cartBtn.addEventListener('click', () => this.openAndCloseCart(cartContainer));
        cartContainer.addEventListener('click', (e) => {
            if (e.target.closest('.remove-cart-item-btn')) {
                this.removeItemFromCart(e, cartContent);
            }

        });


    }

    openAndCloseCart(cartContainer) {
        cartContainer.classList.toggle('hidden');
    }

    updateCartContent(cartItems, cartContent) {
        const cartProductIds = new Set(cartItems.map(item => item.productId));
        const updatedCartContent = product_data.filter(product => cartProductIds.has(product.id));

        cartContent.length = 0;
        cartContent.push(...updatedCartContent);
    }

    displayCartContent(cartContent) {
        const productDataContainer = this.shadowRoot.querySelector('.product-data-container');
        const cartTotalIcon = this.shadowRoot.querySelector('.cart-total');

        productDataContainer.innerHTML = '';

        if (cartContent.length > 0) {
            cartContent.forEach((product, index) => {
                const price = product.price.toFixed(2);
                const quantity = cartItems[index].quantity;
                const totalPrice = (price * quantity).toFixed(2);

                const div = document.createElement('div');
                div.classList.add('product-data');
                div.id = product.id;

                div.innerHTML = `
                    <img src="${product.images.thumbnails[0]}" class="cart-thumbnail" /> 
                    <div class="product-title-and-price">
                        <p class="product-title">${product.title}</p>
                        <div class="price">
                            <div class="product-price">
                                <span>${product.currency}</span>
                                <span>${price}</span>
                            </div>

                            <span class="product-quantity">x ${quantity}</span>

                            <div class="total-price">
                                <span>${product.currency}</span>
                                <span>${totalPrice}</span>
                            </div>
                        </div>
                    </div>
                    <custom-button class="remove-cart-item-btn"><img src="${deleteItemIcon}" alt="Delete Item"/></custom-button>
                    `;

                productDataContainer.appendChild(div);

            });

            cartTotalIcon.classList.remove('hidden');
            cartTotalIcon.innerHTML = `
                <span>${cartTotal}</span>
            `;


        } else {
            const div = document.createElement('div');
            div.classList.add('empty-cart');

            div.innerHTML = `
                <p>Your cart is empty.</p>
                `;

            productDataContainer.appendChild(div);

            cartTotalIcon.classList.add('hidden');

            this.shadowRoot.querySelector('.checkout-btn').classList.add('hidden');

        }
    }

    removeItemFromCart(e, cartContent) {
        const productDataIdToRemove = parseInt(e.target.closest('.product-data').id);
        const itemIndex = cartItems.findIndex(item => item.productId === productDataIdToRemove);

        if (itemIndex !== -1) {
            cartItems.splice(itemIndex, 1)
        }


        this.updateCartContent(cartItems, cartContent);
        this.displayCartContent(cartContent);
    }

}

customElements.define('shopping-cart', ShoppingCart);

export { ShoppingCart }
