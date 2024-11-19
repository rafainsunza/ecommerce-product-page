import html from './lightbox-modal.html';
import { clonedElements } from '../../modules/lightbox-module.js'

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
            padding: 0;
            margin: 0;
        }
        /* component reset */

        .modal {
            border: none;
            padding: 50px 50px 0 50px;

            outline: none;
            background-color: transparent;
            color: hsl(0, 0%, 100%);

            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

        }

        .modal::backdrop {
            background: hsla(0, 0%, 0%, 0.75);
        }

        .thumbnail-wrapper {
            border-radius: 10px;
            border: 3px solid transparent;
            background-color: hsl(0, 0%, 100%);
        }
                
        .thumbnail:hover {
            opacity: 50%;
        }

        .wrapper-active {
            border: 3px solid hsl(26, 100%, 55%);
        }

        .thumbnail-active {
            opacity: 50%;
        }

        .close-btn {
            position: absolute;
            top: 0;
            right: 50px;
        }

        .close-btn:hover {
            color: hsl(26, 100%, 55%);
        }

        .hidden {
            display: none;
        }
    </style>

    ${html}
`;

class LightboxModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        document.addEventListener('image-clicked', (e) => this.handleImageClick(e));

    }

    handleImageClick() {
        this.setVariables();
        this.appendImagesToImgSlider();
        this.addEventListeners();
        this.modal.showModal();

        this.imgSlider.nextBtn.classList.remove('hidden');

    }

    setVariables() {
        this.modal = this.shadowRoot.querySelector('.modal');
        this.imgSlider = this.shadowRoot.querySelector('img-slider');
        this.slidesContainer = this.imgSlider.slidesContainer;
        this.closeBtn = this.shadowRoot.querySelector('.close-btn');
    }

    addEventListeners() {
        this.closeBtn.addEventListener('click', (e) => this.closeModal(e));

        window.addEventListener('resize', () => {
            if (window.innerWidth < 1024) {
                this.modal.close();
            }
        });
    }

    closeModal(e) {
        const closeBtnClicked = e.target.closest('custom-button') === this.closeBtn;

        if (closeBtnClicked) {
            this.modal.close();
        }
    }

    appendImagesToImgSlider() {
        clonedElements.cloned_wrappers.forEach((wrapper) => {
            const thumbnail = wrapper.querySelector('img');
            wrapper.removeChild(thumbnail);
        });

        this.imgSlider.images.forEach((image) => {
            this.imgSlider.appendChild(image);
        });

        this.imgSlider.wrappers.forEach((wrapper) => {
            this.imgSlider.appendChild(wrapper);
        });

        this.imgSlider.wrappers.forEach((wrapper, index) => {
            const thumbnail = this.imgSlider.thumbnails[index];
            wrapper.appendChild(thumbnail);
        });

    }
}

customElements.define('lightbox-modal', LightboxModal);

export { LightboxModal }
