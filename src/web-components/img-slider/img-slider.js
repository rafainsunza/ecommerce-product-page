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


    </style>
    ${html}
`;

class ImgSlider extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const slides = this.querySelectorAll('[slot="slide"]');
        const thumbnails = this.querySelectorAll('[slot="thumbnail"]');

        slides.forEach((slide) => {
            slide.classList.add('hidden');
            slide.classList.add('slide');
        })

        thumbnails.forEach((thumbnail) => {
            thumbnail.classList.add('hidden');
        })

    }
}

customElements.define('img-slider', ImgSlider);

export { ImgSlider }
