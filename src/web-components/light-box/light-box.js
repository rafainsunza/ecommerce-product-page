import html from './light-box.html';

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

        // might have to put an img-slider in the light-box

    </style>

    ${html}
`;

class LightBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.slidesContainer = this.shadowRoot.querySelector('.slides');
        this.thumbnailsContainer = this.shadowRoot.querySelector('.thumbnails');
        this.imgSlider = this.shadowRoot.querySelector('img-slider');

    }

    // setLightboxImages(slides) {
    //     slides.forEach((slide) => {
    //         const slideClone = slide.cloneNode(true);
    //         this.slidesContainer.appendChild(slideClone);
    //     });
    // }

    // setLightBoxThumbnails(thumbnails) {
    //     thumbnails.forEach((thumbnail) => {
    //         const thumbnailClone = thumbnail.cloneNode(true);
    //         this.thumbnailsContainer.appendChild(thumbnailClone);

    //     });
    // }
}

customElements.define('light-box', LightBox);

export { LightBox }
