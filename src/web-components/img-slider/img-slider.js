import html from './img-slider.html';

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
                width: 400px;
            }
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

        ::slotted([slot="slide"]) {
            width: 100%;
            scroll-snap-align: start;
        }

        @media(min-width: 1024px) {
            ::slotted([slot="slide"]) {
                border-radius: 15px;                
            }
        }
     
        .previous:hover, .next:hover {
            cursor: pointer;

        }

        .previous, .next {
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: 50%;
            margin: 0 15px;

            background-color: hsl(0, 0%, 100%);
            width: 30px;
            height: 30px;
            border-radius: 30px;

            @media(min-width: 1024px) {
                display: none;
            }
        }

        .previous > img, .next > img {
            height: 15px;
            width: 10px;
        }

        .next {
            right: 0;
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

        ::slotted([slot="thumbnail"]) {
            display: none;
        }

       @media(min-width: 1024px) {
            ::slotted([slot="thumbnail"]) {
                display: block;

                width: 80px;
                height: 80px;
                border-radius: 10px;
            }

            ::slotted([slot="thumbnail"]:hover) {
                opacity: 50%;
                cursor: pointer;
            }
       }

       .hidden {
            display: none;
       }

    </style>
    ${html}
`;

class ImgSlider extends HTMLElement {
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

        this.images = this.slideSlot.assignedElements();
        this.thumbnails = this.thumbnailSlot.assignedElements();

        this.imagesInView = this.checkElementsInView(this.images, this.slidesContainer);
        this.activeImageIndex = 0;
        this.maxImageIndex = this.images.length - 1;
        this.thumbnails[this.activeImageIndex].classList.add('active');
        this.hasResizedOnce = false;

        this.toggleNavigationButtons(this.imagesInView);

        let scrollStartTime = 0;
        let scrollEndTime = 0;
        let scrollingTimeout;

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

        // const lightbox = this.shadowRoot.querySelector('light-box');


        // this.slideSlot.addEventListener('slotchange', () => {
        //     lightbox.setLightboxImages(this.images);
        // })
        // this.thumbnailSlot.addEventListener('slotchange', () => {
        //     lightbox.setLightBoxThumbnails(this.thumbnails);
        // })

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

            this.thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
            this.thumbnails[newImageData.index].classList.add('active');

            this.hasResizedOnce = true;

        } else if (window.innerWidth < 1024) {
            this.hasResizedOnce = false;
        }
    }

    getScrollPositionAndIndex() {
        const thumbnailIndexes = [];
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
        const imagesInView = this.checkElementsInView(this.images, this.slidesContainer);

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


    }

    thumbnailNavigation(e) {
        const clickedThumbnail = e.target.closest('.thumbnail');

        if (clickedThumbnail !== null) {
            const clickedThumbnailIndex = this.thumbnails.indexOf(clickedThumbnail);
            const scrollPositionsAndIndexes = this.getScrollPositionAndIndex();
            const newImageData = scrollPositionsAndIndexes.find(imageData => imageData.index === clickedThumbnailIndex);

            this.thumbnails.forEach((thumbnail) => thumbnail.classList.remove('active'));

            if (clickedThumbnailIndex !== this.activeImageIndex) {
                this.slidesContainer.scrollTo({ left: newImageData.scroll_position, behavior: 'smooth' });
                this.activeImageIndex = newImageData.index;
                clickedThumbnail.classList.add('active');
            }

        }
    }
}

customElements.define('img-slider', ImgSlider);

export { ImgSlider }
