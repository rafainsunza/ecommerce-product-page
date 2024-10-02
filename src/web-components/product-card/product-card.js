import html from './product-card.html';

import { product_data } from '../../data/product-data.js';
import { addToCart } from '../../modules/cart-module.js'

const template = document.createElement('template');

template.innerHTML = `
    <style>

        /* component reset */
        a {
            text-decoration: none;
        }

        * {
            box-sizing: border-box;
            font-family: 'Kumbh Sans';
            margin: 0;
        }
        /* component reset */

        .card-container {
            @media(min-width: 1024px) {
                max-width: 85%;
                margin: 80px auto 0 auto;
            }

            @media(min-width: 1400px) {
                max-width: 75%;
            }
        }

        .card {
            @media(min-width: 1024px) {
                display: flex;
            }
        }

        .product-info {
            padding: 0 20px 20px 20px;

            @media(min-width: 600px) {
                width: 80%;
                margin: auto;
            }

            @media(min-width: 1024px) {
                width: 100%;
                margin-left: 80px;
            }       
        }

        .brand {
            color: hsl(219, 9%, 45%);
            font-weight: 700;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .product-title {
            font-weight: 700;
            font-size: 28px;
            line-height: 30px;

            padding: 20px 0;

            @media(min-width: 1024px) {
                font-size: 36px;
                line-height: 38px;
            }
        }

        .description {
            color: hsl(219, 9%, 45%);
            line-height: 24px;
            margin-bottom: 15px;
        }
      
        .price {
            display: flex;
            padding: 20px 0;

            @media(min-width: 1024px) {
                flex-wrap: wrap;
            }
        }

        .price-before-container {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            
            @media(min-width: 1024px) {
                justify-content: flex-start;    
                margin-top: 15px;    
            }
        }
   
        .currency:first-of-type, .price-after {
            font-weight: 700;
            font-size: 28px;  
        }

        .discount { 
            align-content: center;

            font-weight: 700;
            color: hsl(0, 0%, 100%);

            background-color: hsl(220, 13%, 13%);
            border-radius: 5px;
            padding: 0 10px;
            margin-left: 20px;
        }

        .currency:nth-last-of-type(2), .price-before {
            font-weight: 700;
            font-size: inherit;
            color: hsl(219, 9%, 45%);
            text-decoration: line-through;
            text-decoration-color: hsl(219, 9%, 45%);
        }

        .actions-container {
            @media(min-width: 1024px) {
                display: flex;
                justify-content: space-between;
            }
        }

        .quantity-container {
            display: flex;
            justify-content: space-between;

            padding: 0 20px;
            margin-bottom: 15px;

            background-color: hsl(223, 64%, 98%);
            border-radius: 7.5px;

            @media(min-width: 1024px) {
                width: 40%;
            }
        }

        .add-to-cart-container {
            @media(min-width: 1024px) {
                width: 50%;
            }

        }

        .less, .more {
            display: flex;
            align-items: center;

            height: 55px; 
            width: 15px;  
        }

       .less:hover, .more:hover{
            cursor: pointer;
        }

        .less-icon, .more-icon {
            color: hsl(26, 100%, 55%);
        }

        .less:hover .less-icon,
        .more:hover .more-icon {
            color: hsla(26, 100%, 55%, 0.5);
        }

        .quantity {
            align-content: center;
            font-weight: 700;
        }

        .add-to-cart {
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: hsl(26, 100%, 55%);
            font-weight: 700;
            border-radius: 7.5px;

            height: 55px;
        }

        .add-to-cart:hover {
            cursor: pointer;
            opacity: 80%;
        }

        .cart-icon {
            margin-right: 20px;
            font-size: 15px;
        }

        .hidden {
            display: none;
        }

        .active {
            border: 3px solid hsl(26, 100%, 55%);
            opacity: 70%;
        }


    </style>

    ${html}
`;

class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // handle full size images
        const productId = Number(this.getAttribute('product-id'));
        const product = product_data.find(product => product.id === productId);
        this.fullSizeImages = product.images.full_size;
        this.thumbnails = product.images.thumbnails;

        // handle product info
        const info = this.shadowRoot.querySelector('.info');
        const price = this.shadowRoot.querySelector('.price');

        info.innerHTML = `
            <p class="brand">${product.brand}</p>
            <p class="product-title">${product.title}</p>
            <p class="description">${product.description}</p>
        `;

        price.innerHTML = `
            <span class="currency">${product.currency}</span>
            <span class="price-after">${product.price.toFixed(2)}</span>
            <span class="discount">${product.discount_percentage}%</span>

            <div class="price-before-container">
                <span class="currency">${product.currency}</span>
                <span class="price-before">${product.price_before.toFixed(2)}</span>
            </div>
              
        `;

        // handle add to cart
        this.amountOfItemsToBeAddedToCart = 0;
        const quantitySpan = this.shadowRoot.querySelector('.quantity');
        quantitySpan.innerHTML = this.amountOfItemsToBeAddedToCart;

        this.shadowRoot.querySelector('.less').addEventListener('click', (e) => this.handleCartQuantity(e));
        this.shadowRoot.querySelector('.more').addEventListener('click', (e) => this.handleCartQuantity(e));
        this.shadowRoot.querySelector('.add-to-cart').addEventListener('click', () => this.handleCartAdd(product));

    }

    setInitialImages() {
        const fullSizeImageContainer = this.shadowRoot.querySelector('.full-size-image-container');
        const thumbnailsContainer = this.shadowRoot.querySelector('.thumbnails-container');

        const fullSizeImage = this.fullSizeImages[this.activeImage];

        const fullSizeImgElement = document.createElement('img');
        fullSizeImgElement.src = fullSizeImage;
        fullSizeImgElement.classList.add('full-size-image');
        fullSizeImageContainer.append(fullSizeImgElement);

        this.thumbnails.forEach((thumbnail) => {
            const img = document.createElement('img');
            img.src = thumbnail;
            img.classList.add('hidden');

            thumbnailsContainer.appendChild(img);
        });

    }

    handleCartAdd(product) {
        if (this.amountOfItemsToBeAddedToCart > 0) {
            addToCart(product.id, this.amountOfItemsToBeAddedToCart);
            this.amountOfItemsToBeAddedToCart = 0;
            this.updateCartQuantity();

            this.dispatchEvent(new CustomEvent('custom-event', {
                bubbles: true,
                composed: true
            }))
        }
    }

    handleCartQuantity(e) {
        const clickedBtn = e.target.closest('custom-button');

        if (clickedBtn.classList.contains('less') && this.amountOfItemsToBeAddedToCart > 0) {
            this.amountOfItemsToBeAddedToCart--;
        }

        if (clickedBtn.classList.contains('more')) {
            this.amountOfItemsToBeAddedToCart++;
        }

        this.updateCartQuantity();
    }

    updateCartQuantity() {
        this.shadowRoot.querySelector('.quantity').textContent = this.amountOfItemsToBeAddedToCart;
    }
}

customElements.define('product-card', ProductCard);

export { ProductCard }
