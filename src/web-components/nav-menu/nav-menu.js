import html from './nav-menu.html';
import style from './nav-menu.sass';
import menuItems from './menu-items.json';

const template = document.createElement('template');

const reset = `
    button {
        border: none;
        padding: 0;
    }

    button:hover {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;

const navMenuContainerStyle = `
        .nav-menu-container {
            position: fixed;
            top: 0;
            left: 0;    

            height: 100vh;
            width: 70%;
            padding: 30px;

            font-family: 'Kumbh Sans';
            font-weight: 700;
            background-color: hsl(0, 0%, 100%);
        } 
        
        .hidden {
            // display: none;
        }
`;

const navItemsStyle = `
        .nav-items {
            display: flex;
            flex-direction: column;
        }

        .nav-link {
            color: var(--nav-link-text-color-mobile);

            padding: 15px 0;
        }
`;

const btnStyle = `
        .close-nav-btn {
            background-color: hsl(0, 0%, 100%);

            margin-bottom: 30px;
        }

        .open-nav-btn {
            background-color: hsl(0, 0%, 100%);

        }
`;

template.innerHTML = `
    <style>
        ${reset}
        ${navMenuContainerStyle}
        ${btnStyle}
        ${navItemsStyle}
    </style>

    ${html}
`;


class NavMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        menuItems.forEach((item) => {
            const link = document.createElement('a');
            link.href = item.url;
            link.innerText = item.title;
            link.classList.add('nav-link');

            this.shadowRoot.querySelector('.nav-items').append(link);
        })
    }

}

customElements.define('nav-menu', NavMenu);

export { NavMenu }
