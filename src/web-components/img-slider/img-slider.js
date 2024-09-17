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
            width: 320px;
            height: 100%;
            margin: auto;

            @media(min-width: 655px) {
                width: 655px;
            }

            @media(min-width: 900px) {
                margin-top: 80px;
            }

            @media(min-width: 1024px) {
                width: 400px;
            }
        }

        .slides {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: 320px;

            gap: 15px;

            overflow-x: auto;
            scroll-snap-type: inline mandatory;
            scrollbar-width: none;

            @media(min-width: 1024px) {
                grid-auto-columns: 400px;
            }
        }
   
        ::slotted([slot="slide"]) {
            width: 100%;
            height: 300px;
            object-fit: cover;

            scroll-snap-align: start;
        }

        @media(min-width: 350px) {
            ::slotted([slot="slide"]) {
                border-radius: 15px;
            }
        }

        @media(min-width: 1024px) {
            ::slotted([slot="slide"]) {
                height: 400px;
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

    </style>
    ${html}
`;

class ImgSlider extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.slidesContainer = this.shadowRoot.querySelector('.slides');
        this.thumbnailsContainer = this.shadowRoot.querySelector('.thumbnails');

        this.slideSlot = this.shadowRoot.querySelector('slot[name="slide"]');
        this.images = this.slideSlot.assignedElements();
        this.thumbnails = this.shadowRoot.querySelector('slot[name="thumbnail"]').assignedElements();
        this.thumbnails[0].classList.add('active');

        this.previousBtn = this.shadowRoot.querySelector('.previous');
        this.nextBtn = this.shadowRoot.querySelector('.next');

        this.previousBtn.addEventListener('click', (e) => this.navigateImages(e));
        this.nextBtn.addEventListener('click', (e) => this.navigateImages(e));
        this.slidesContainer.addEventListener('scroll', (e) => this.thumbnailNavigation(e));
        this.thumbnailsContainer.addEventListener('click', (e) => this.thumbnailNavigation(e));
    }

    navigateImages(e) {
        const clickedBtn = e.target.closest('custom-button').classList[0];
        const scrollPosition = this.slidesContainer.scrollLeft;

        if (clickedBtn === 'next') {
            this.slidesContainer.scrollTo({ left: scrollPosition + 320, behavior: 'smooth' });
        }

        if (clickedBtn === 'previous') {
            this.slidesContainer.scrollTo({ left: scrollPosition - 320, behavior: 'smooth' });
        }
    }

    thumbnailNavigation(e) {
        const currentScrollPosition = this.slidesContainer.scrollLeft;
        let currentImageIndex = Math.floor(currentScrollPosition / (this.images.length * 100));
        let activeImage = this.images[currentImageIndex];

        // get the active image and find the corresponding thumbnail
        let activeThumbnail = this.thumbnails.find((thumbnail) => {
            return thumbnail.classList.contains(activeImage.classList[1]);
        });
        // reset active thumnail
        this.thumbnails.forEach((thumbnail) => { thumbnail.classList.remove('active') });
        // set the new active thumbnail
        activeThumbnail.classList.add('active');


        // set the scrollposition of each image and pair it with their index
        const imagePositionsAndIndexes = [];
        let imageScrollPosition = 0;
        this.images.forEach((image, index) => {
            imagePositionsAndIndexes.push({ scroll_position: imageScrollPosition, index: index });
            imageScrollPosition = imageScrollPosition + (this.slidesContainer.scrollWidth / this.images.length);
        })

        // get the clicked thumbnail index so the corresponding full size image can be displayed using the image positions
        if (e.target.classList.contains('thumbnail')) {
            const clickedThumbnail = e.target.classList[1];

            if (clickedThumbnail === activeImage) {
                return
            } else {
                const thumbnailIndex = Number(clickedThumbnail.slice(8)) - 1;
                const positionToScrollTo = imagePositionsAndIndexes.find(imagePosition => imagePosition.index === thumbnailIndex)?.scroll_position;
                const imageIndex = imagePositionsAndIndexes.find(imagePosition => imagePosition.index === thumbnailIndex)?.index;

                // set the new active thumbnail
                activeThumbnail = this.thumbnails[thumbnailIndex];
                this.thumbnails.forEach((thumbnail) => { thumbnail.classList.remove('active') });
                activeThumbnail.classList.add('active');

                // scroll to full size image position
                this.slidesContainer.scrollTo({ left: positionToScrollTo, behavior: 'smooth' })
            }

        }
    }
}

customElements.define('img-slider', ImgSlider);

export { ImgSlider }
