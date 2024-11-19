import html from './img-slider.html';
import { cloneElement, clonedElements } from '../../modules/lightbox-module';

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

        .slider {
            position: relative;
            width: 100%;   
            margin: auto;

            @media(min-width: 1024px) {
                width: 350px;
            }
        }

        .lightbox-slider {
            width: 500px;
        }


        .slides {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: 100%;
            

            overflow-x: auto;
            scroll-snap-type: inline mandatory;
            scrollbar-width: none;

            @media(min-width: 500px) {
                gap: 20px;
                grid-auto-columns: calc(50% - 10px); 
            }
          
            @media(min-width: 1024px) {
                grid-auto-columns: 100%;
                gap: 0;
            }
        }

        .slides:hover {
            @media(min-width: 1024px) {
                cursor: pointer;
            }
        }

        .thumbnails {
            display: grid;
            grid-auto-flow: column;
            justify-content: space-between;
            margin-top: 30px;
            padding-bottom: 10px;
            overflow-x: auto;
            scroll-snap-type: inline mandatory;
            scrollbar-color: hsl(26, 100%, 55%) hsl(25, 100%, 94%);
        }

        .lightbox-thumbnails {
            justify-content: center;
            gap: 20px;
        }

        ::slotted([slot="slide"]) {
            width: 100%;
            scroll-snap-align: start;
        }

        @media(min-width: 1024px) {
            ::slotted([slot="slide"]) {
                border-radius: 15px;                
            }
        }

        ::slotted([slot="thumbnail"]) {
            display: none;
        }

        @media(min-width: 1024px) {
            ::slotted([slot="thumbnail"]) {
                display: flex;
                height: 80px;
                width: 80px;
                border-radius: 10px;
            }
        }

        .previous:hover, .next:hover {
            cursor: pointer;
            color: hsl(26, 100%, 55%);
        }

        .previous, .next {
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: 50%;
            margin: 0 15px;

            color: black;
            background-color: hsl(0, 0%, 100%);
            width: 40px;
            height: 40px;
            border-radius: 100%;

            @media(min-width: 1024px) {
                display: none;
            }
        }

        .next {
            right: 0;
        }

        .lightbox-previous, .lightbox-next {
            display: flex;
            width: 55px;
            height: 55px;
            top: 35%;
        }

        .lightbox-previous {
            left: -45px;
        }

        .lightbox-next {
            right: -45px;
        }

       .hidden {
            display: none; 
       }

    </style>
    ${html}
`;

class ImgSlider extends HTMLElement {
    static get observedAttributes() {
        return ['styling'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.slidesContainer = this.shadowRoot.querySelector('.slides');
        this.slideSlot = this.shadowRoot.querySelector('slot[name="slide"]');
        this.thumbnailSlot = this.shadowRoot.querySelector('slot[name="thumbnail"]');
        this.thumbnailsContainer = this.shadowRoot.querySelector('.thumbnails');
        this.previousBtn = this.shadowRoot.querySelector('.previous');
        this.nextBtn = this.shadowRoot.querySelector('.next');

        // if the first slots are filled 
        // set the variables and clone them if necessary for use in other elements (lightbox)
        if (this.thumbnailSlot.assignedElements().length > 0) {
            this.images = this.slideSlot.assignedElements();
            this.wrappers = this.thumbnailSlot.assignedElements();
            this.thumbnails = this.wrappers.map(wrapper => wrapper.querySelector('img'));

            // notify that the image has been clicked and return its index
            this.slidesContainer.addEventListener('click', (e) => this.handleImageClick(e));

            cloneElement(this.images, 'cloned_images');
            cloneElement(this.wrappers, 'cloned_wrappers');
            cloneElement(this.thumbnails, 'cloned_thumbnails');

        } else {
            this.images = clonedElements.cloned_images;
            this.wrappers = clonedElements.cloned_wrappers;
            this.thumbnails = clonedElements.cloned_thumbnails;
        }


        this.imagesInView = this.checkElementsInView(this.images, this.slidesContainer);
        this.activeImageIndex = 0;
        this.maxImageIndex = this.images.length - 1;
        this.thumbnails[this.activeImageIndex].classList.add('thumbnail-active');
        this.wrappers[this.activeImageIndex].classList.add('wrapper-active');
        this.hasResizedOnce = false;

        this.applyDefaultThumbnailStyling();
        this.toggleNavigationButtons(this.imagesInView);
        this.setEventListeners();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'styling' && newValue === 'lightbox') {
            const slider = this.shadowRoot.querySelector('.slider');

            slider.classList.add('lightbox-slider');
            this.thumbnailsContainer.classList.add('lightbox-thumbnails');
            this.nextBtn.classList.add('lightbox-next');
            this.previousBtn.classList.add('lightbox-previous');
        }
    }

    setEventListeners() {
        this.previousBtn.addEventListener('click', (e) => this.navigateImages(e));
        this.nextBtn.addEventListener('click', (e) => this.navigateImages(e));
        this.slidesContainer.addEventListener('scroll', () => {
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                const imagesInView = this.checkElementsInView(this.images, this.slidesContainer);
                this.toggleNavigationButtons(imagesInView);
            }, 100);
        });
        this.thumbnailsContainer.addEventListener('click', (e) => this.thumbnailNavigation(e));
        window.addEventListener('resize', () => this.correctDesktopImageAfterResize());

    }

    handleImageClick(event) {
        if (window.innerWidth >= 1024) {
            event = new CustomEvent('image-clicked', {
                bubbles: true,
                composed: true,
                detail: { image_index: this.activeImageIndex }
            });
            this.dispatchEvent(event);
        }
    }

    applyDefaultThumbnailStyling() {
        this.thumbnails.forEach((thumbnail) => {
            thumbnail.style.borderRadius = "10px";

            thumbnail.addEventListener('mouseenter', () => {
                thumbnail.style.cursor = "pointer";
            });

        })
    }

    toggleNavigationButtons(imagesInView) {
        const lastImage = this.images[this.images.length - 1];
        const firstImage = this.images[0];
        const lastImageInView = imagesInView[imagesInView.length - 1];
        const firstImageInView = imagesInView[0];

        lastImage === lastImageInView ? this.nextBtn.classList.add('hidden') : this.nextBtn.classList.remove('hidden');
        firstImage === firstImageInView ? this.previousBtn.classList.add('hidden') : this.previousBtn.classList.remove('hidden');

    }

    checkElementsInView(elements, container) {
        const elementsInView = [];
        const containerBounds = container.getBoundingClientRect();

        elements.forEach((element) => {
            const elementBounds = element.getBoundingClientRect();

            elementBounds.left >= containerBounds.left - 1 && elementBounds.right <= containerBounds.right + 1 ?
                elementsInView.push(element) : null;
        });

        return elementsInView
    }

    correctDesktopImageAfterResize() {
        if (window.innerWidth >= 1024 && !this.hasResizedOnce) {
            const scrollPositionsAndIndexes = this.getScrollPositionAndIndex();
            const newImageData = scrollPositionsAndIndexes.find(imageData => imageData.index === this.activeImageIndex);

            this.slidesContainer.scrollTo({ left: newImageData.scroll_position, behavior: 'smooth' });

            this.thumbnails.forEach(thumbnail => thumbnail.classList.remove('thumbnail-active'));
            this.wrappers.forEach(wrapper => wrapper.classList.remove('wrapper-active'));
            this.thumbnails[newImageData.index].classList.add('thumbnail-active');
            this.wrappers[newImageData.index].classList.add('wrapper-active');

            this.hasResizedOnce = true;

        } else if (window.innerWidth < 1024) {
            this.hasResizedOnce = false;
        }
    }

    getScrollPositionAndIndex() {
        const imagePositionsAndIndexes = [];
        let imageScrollPosition = 0;
        this.images.forEach((image, index) => {
            imagePositionsAndIndexes.push({ scroll_position: imageScrollPosition, index: index });
            imageScrollPosition = imageScrollPosition + (this.slidesContainer.scrollWidth / this.images.length);

        });

        return imagePositionsAndIndexes
    }

    navigateImages(e) {
        const clickedBtn = e.target.closest('custom-button');
        const scrollPositionsAndIndexes = this.getScrollPositionAndIndex();

        if (clickedBtn === this.nextBtn) {
            this.activeImageIndex < this.maxImageIndex ? this.activeImageIndex++ : null;
            const newImageData = scrollPositionsAndIndexes.find(imageData => imageData.index === this.activeImageIndex);

            this.slidesContainer.scrollTo({ left: newImageData.scroll_position, behavior: 'smooth' });
        }

        if (clickedBtn === this.previousBtn) {
            this.activeImageIndex > 0 ? this.activeImageIndex-- : null;
            const newImageData = scrollPositionsAndIndexes.find(imageData => imageData.index === this.activeImageIndex);

            this.slidesContainer.scrollTo({ left: newImageData.scroll_position, behavior: 'smooth' });
        }

        this.thumbnails.forEach((thumbnail, index) => {
            const isActive = index === this.activeImageIndex;
            thumbnail.classList.toggle('thumbnail-active', isActive);
            this.wrappers[index].classList.toggle('wrapper-active', isActive);
        });
    }

    thumbnailNavigation(e) {
        const clickedThumbnail = e.target.closest('.thumbnail');

        if (clickedThumbnail !== null) {
            const clickedThumbnailIndex = this.thumbnails.indexOf(clickedThumbnail);
            const scrollPositionsAndIndexes = this.getScrollPositionAndIndex();
            const newImageData = scrollPositionsAndIndexes.find(imageData => imageData.index === clickedThumbnailIndex);

            this.thumbnails.forEach((thumbnail, index) => {
                const isActive = index === clickedThumbnailIndex;
                thumbnail.classList.toggle('thumbnail-active', isActive);
                this.wrappers[index].classList.toggle('wrapper-active', isActive);
            });

            if (clickedThumbnailIndex !== this.activeImageIndex) {
                this.slidesContainer.scrollTo({ left: newImageData.scroll_position, behavior: 'smooth' });
                this.activeImageIndex = clickedThumbnailIndex;
            }
        }
    }
}

customElements.define('img-slider', ImgSlider);

export { ImgSlider }
