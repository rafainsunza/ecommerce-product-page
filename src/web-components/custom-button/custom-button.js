import html from './custom-button.html';

const template = document.createElement('template');

template.innerHTML = `
    <style>
        button {
            box-sizing: border-box;
            border: none;
            padding: 0;
            background-color: inherit;
            font-weight: inherit;
            font-family: inherit;
            font-size: inherit;
            display: inherit;
        }

        button:hover {
            cursor: pointer;
        }

        .hidden {
            display: none;
        }

    </style>

    ${html}
`;

class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

customElements.define('custom-button', CustomButton);

export { CustomButton }
