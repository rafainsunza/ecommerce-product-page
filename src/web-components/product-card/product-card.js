import html from './product-card.html';

import lessIcon from '../../assets/icon-minus.svg';
import moreIcon from '../../assets/icon-plus.svg';
import cartIcon from '../../assets/icon-cart.svg';

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

        .card {
            width: 320px;
        }

        .images-container {
            position: relative;
            height: 300px;
        }

        .full-size-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }

        .previous, .next {
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: 50%;

            background-color: hsl(0, 0%, 100%);
            width: 35px;
            height: 35px;
            border-radius: 35px;
        }

        .previous {
            left: 20px;
        }

        .previous:hover {
            cursor: pointer;
        }

        .next {
            right: 20px;
        }

        .next:hover {
            cursor: pointer;
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
        }

        .description {
            color: hsl(219, 9%, 45%);
            line-height: 24px;
            margin-bottom: 15px;
        }

        .product-info {
            padding: 20px;
        }

        .price {
            display: flex;

            padding: 20px 0;
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
            color: hsl(219, 9%, 45%);
            text-decoration: line-through;
            text-decoration-color: hsl(219, 9%, 45%);
            align-content: center;
        }

        .currency:nth-last-of-type(2) {
            margin-left: auto;
        }

        .quantity-container {
            display: flex;
            justify-content: space-between;

            padding: 0 20px;
            margin-bottom: 15px;

            background-color: hsl(223, 64%, 98%);
            border-radius: 7.5px;
        }

        .less, .more {
            display: flex;
            align-items: center;

            height: 55px; 
            width: 15px;  
        }

        .less:hover, .more:hover {
            cursor: pointer;
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
        }
     
        .cart-icon {
            margin-right: 20px;
            font-size: 15px;
        }

        .hidden {
            display: none;
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
        const fullSizeImages = product.images.full_size;
        const thumbnails = product.images.thumbnails;

        this.imageCount = product.images.full_size.length;
        this.activeImage = this.imageCount - this.imageCount;

        this.setInitialImages(fullSizeImages, thumbnails, this.activeImage);

        this.shadowRoot.querySelector('.previous').addEventListener('click', (e) => this.navigateImages(e, fullSizeImages, this.activeImage, this.imageCount));
        this.shadowRoot.querySelector('.next').addEventListener('click', (e) => this.navigateImages(e, fullSizeImages, this.activeImage, this.imageCount));

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
            <span class="currency">${product.currency}</span>
            <span class="price-before">${product.price_before.toFixed(2)}</span>
        `;

        // handle add to cart
        this.amountOfItemsToBeAddedToCart = 0;

        const quantityContainer = this.shadowRoot.querySelector('.quantity-container');
        quantityContainer.innerHTML = `
             <custom-button class="less">
                <img src="${lessIcon}" alt="Less" />
            </custom-button>

            <span class="quantity">${this.amountOfItemsToBeAddedToCart}</span>

            <custom-button class="more">
                <img src="${moreIcon}" alt="More" />
            </custom-button>
        `;

        this.shadowRoot.querySelector('.less').addEventListener('click', (e) => this.handleCartQuantity(e));
        this.shadowRoot.querySelector('.more').addEventListener('click', (e) => this.handleCartQuantity(e));
        this.shadowRoot.querySelector('.add-to-cart').addEventListener('click', () => this.handleCartAdd(product));

    }

    setInitialImages(fullSizeImages, thumbnails) {
        const fullSizeImageContainer = this.shadowRoot.querySelector('.full-size-image-container');
        const thumbnailsContainer = this.shadowRoot.querySelector('.thumbnails-container');

        const fullSizeImage = fullSizeImages[this.activeImage];

        const fullSizeImgElement = document.createElement('img');
        fullSizeImgElement.src = fullSizeImage;
        fullSizeImgElement.classList.add('full-size-image');
        fullSizeImageContainer.append(fullSizeImgElement);

        thumbnails.forEach((thumbnail) => {
            const img = document.createElement('img');
            img.src = thumbnail;
            img.classList.add('hidden');

            thumbnailsContainer.appendChild(img);
        });
    }

    navigateImages(e, fullSizeImages) {
        const clickedBtn = e.target.closest('custom-button');
        const fullSizeImageContainer = this.shadowRoot.querySelector('.full-size-image-container');

        fullSizeImageContainer.innerHTML = '';
        const img = document.createElement('img');
        img.classList.add('full-size-image');


        if (clickedBtn.classList.contains('previous') && this.activeImage >= 1) {
            this.activeImage--;

            img.src = fullSizeImages[this.activeImage];
            fullSizeImageContainer.append(img);

        } else if (clickedBtn.classList.contains('previous') && this.activeImage === 0) {
            this.activeImage = this.imageCount - 1;

            img.src = fullSizeImages[this.activeImage];
            fullSizeImageContainer.append(img);

        }

        if (clickedBtn.classList.contains('next') && this.activeImage <= this.imageCount - 2) {
            this.activeImage++;

            img.src = fullSizeImages[this.activeImage];
            fullSizeImageContainer.append(img);

        } else if (clickedBtn.classList.contains('next') && this.activeImage === this.imageCount - 1) {
            this.activeImage = this.imageCount - this.imageCount;

            img.src = fullSizeImages[this.activeImage];
            fullSizeImageContainer.append(img);

        }
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
