import html from './nav-menu.html';
import style from './nav-menu.sass';
import menuItems from './menu-items.json';

const template = document.createElement('template');

const componentStyle = `
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
`;

const navMenuContainerStyle = `
        .nav-menu-container {
            position: fixed;
            top: 0;
            left: 0;    
            z-index: 2;

            height: 100vh;
            width: 70%;
            padding: 30px;

            font-weight: 700;
            background-color: hsl(0, 0%, 100%);
        }         
`;

const navItemsStyle = `
        .nav-items {
            display: flex;
            flex-direction: column;
        }

        .nav-link {
            color: hsl(220, 13%, 13%);

            padding: 15px 0;
        }
`;

const btnStyle = `
        .close-nav-btn {
            margin-bottom: 30px;
        }

        .open-nav-btn {
            display: flex;
        }
`;

template.innerHTML = `
    <style>
        ${componentStyle}
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

        const openNavBtn = this.shadowRoot.querySelector('.open-nav-btn');
        const closeNavBtn = this.shadowRoot.querySelector('.close-nav-btn');
        const navMenuContainer = this.shadowRoot.querySelector('.nav-menu-container');
        const overlay = document.querySelector('screen-overlay');

        function openCloseNavMenu(e) {
            const clickedBtn = e.target.closest('custom-button');

            clickedBtn.classList.contains('open-nav-btn') ?
                navMenuContainer.classList.toggle('hidden') :
                overlay.toggleVisibility();
            clickedBtn.classList.contains('close-nav-btn') ?
                navMenuContainer.classList.toggle('hidden') :
                overlay.toggleVisibility();
        }

        closeNavBtn.addEventListener('click', openCloseNavMenu);
        openNavBtn.addEventListener('click', openCloseNavMenu);
    }

}

customElements.define('nav-menu', NavMenu);

export { NavMenu }
