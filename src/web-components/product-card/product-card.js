import html from './product-card.html';
import { product_data } from '../../data/product-data.js';
import less from '../../assets/icon-minus.svg';
import more from '../../assets/icon-plus.svg';
import cartIcon from '../../assets/icon-cart.svg';
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

        .images-container {
            position: relative;
        }

        .full-size-image {
            width: 100%;
        }

        .previous {
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: 50%;
            left: 20px;

            background-color: hsl(0, 0%, 100%);
            width: 35px;
            height: 35px;
            border-radius: 35px;
        }

        .previous:hover {
            cursor: pointer;
        }

        .next {
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: 50%;
            right: 20px;

            background-color: hsl(0, 0%, 100%);
            width: 35px;
            height: 35px;
            border-radius: 35px;
        }

        .next:hover {
            cursor: pointer;
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
            <span class="price-after">${product.price}</span>
            <span class="discount">${product.discount_percentage}%</span>
            <span class="currency">${product.currency}</span>
            <span class="price-before">${product.price_before}</span>
        `;

        // handle add to cart
        this.amountOfItemsToBeAddedToCart = 0;

        const quantityContainer = this.shadowRoot.querySelector('.quantity-container');
        quantityContainer.innerHTML = `
             <custom-button class="less">
                <img src="${less}" alt="Less" />
            </custom-button>

            <span class="quantity">${this.amountOfItemsToBeAddedToCart}</span>

            <custom-button class="more">
                <img src="${more}" alt="More" />
            </custom-button>

            <custom-button class="add-to-cart">
                <img src="${cartIcon}" /> Add to cart
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
