import html from './screen-overlay.html';

const template = document.createElement('template');

template.innerHTML = `
    <style>
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

        .overlay {
            position: fixed;
            top: 0;
            right: 0;
            z-index: 1;

            height: 100vh;
            width: 100%;

            background-color: hsla(0, 0%, 0%, 0.75);
        }
    </style>

    ${html}
`;


class ScreenOverlay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    toggleVisibility() {
        this.shadowRoot.querySelector('.overlay').classList.toggle('hidden')
    }
}

customElements.define('screen-overlay', ScreenOverlay);

export { ScreenOverlay }
