import html from './shopping-cart.html';
import style from './shopping-cart.sass';
import { deleteItemIcon } from '../../data/icons.js';
import { product_data } from '../../data/product-data.js'
import { cartItems } from '../../js/global-variables.js';


const template = document.createElement('template');
const componentStyle = `
    button {
        border: none;
        padding: 0;
        background-color: hsl(0, 0%, 100%);
    }

    button:hover {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        font-family: 'Kumbh Sans';

    }

    .hidden {
        display: none;
    }
`;

const cartContainerStyle = `
    .cart-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
    }

    .cart-container {
        position: absolute;
        top: 10px;

        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        background-color: hsl(0, 0%, 100%);
        color: hsl(220, 13%, 13%);
    }
`;

const cartHeaderStyle = `
    .cart-header {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        font-weight: 700;

        padding: 25px 15px;
    }
`;

const cartBodyStyle = `
    .cart-body {
        padding: 20px;
    }

    .product-data {
        display: flex;

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
    }

    .checkout-btn {
        font-weight: 700;
        font-size: 16px;

        padding: 15px;
        margin: 25px 0 15px 0;
        width: 100%;

        border-radius: 7.5px;
        background-color: hsl(26, 100%, 55%);
    }

 `;


template.innerHTML = `
    <style>
        ${componentStyle}
        ${cartContainerStyle}
        ${cartHeaderStyle}
        ${cartBodyStyle}
    </style>

    ${html}
`;


class ShoppingCart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const productsInCart = [];
        console.log(cartItems)
        cartItems.forEach((cartItem) => {
            product_data.forEach((product) => {
                product.id === cartItem.productId ? productsInCart.push(product) : null;
            })
        });

        if (productsInCart.length > 0) {
            productsInCart.forEach((product, index) => {
                const price = (product.price).toFixed(2);
                const quantity = cartItems[index].quantity;
                const totalPrice = (price * quantity).toFixed(2);

                const div = document.createElement('div');
                div.classList.add('product-data');

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
                    <button class="remove-cart-item-btn">
                        <img src="${deleteItemIcon}" alt="Delete Item" />
                    </button>
                    `;
                this.shadowRoot.querySelector('.product-data-container').appendChild(div);

            });
        }


    }

}

customElements.define('shopping-cart', ShoppingCart);

export { ShoppingCart }
