import html from './nav-menu.html';

import menuItems from './menu-items.json';

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
        }
        /* component reset */


        .nav-menu-container {
            position: fixed;
            top: 0;
            left: 0;    
            z-index: 3;

            height: 100%;
            width: 70%;
            padding: 30px;

            font-weight: 700;
            background-color: hsl(0, 0%, 100%);
          
            @media(min-width: 1024px) {
                position: static;
                display: flex;
                width: auto;
                padding: 0;   
            }
        }          

        .nav-items {
            display: flex;
            flex-direction: column;

            @media(min-width: 1024px) {
                flex-direction: row;
                margin-left: 40px;
            }
        }

        .nav-link {
            color: hsl(220, 13%, 13%);
            padding: 15px 0;

            @media(min-width: 1024px) {
                align-content: center;
                padding: 0 15px;
                border-bottom: 3px solid hsl(0, 0%, 100%);
                font-weight: 400;
                color: hsl(219, 9%, 45%);
            }
        }

        .nav-link:hover {
            @media(min-width: 1024px) {
                color: hsl(220, 13%, 13%);
                border-bottom: 3px solid hsl(26, 100%, 55%);
            }
        }

        .open-nav-btn {
            display: flex;

            @media(min-width: 1024px) {
                display: none;
            }

        }

        .close-nav-btn {
            margin-bottom: 30px;

            @media(min-width: 1024px) {
                display: none;
            }
        }

        .hidden {
            display: none;
        }
     
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

        this.openNavBtn = this.shadowRoot.querySelector('.open-nav-btn');
        this.closeNavBtn = this.shadowRoot.querySelector('.close-nav-btn');
        this.navMenuContainer = this.shadowRoot.querySelector('.nav-menu-container');
        this.overlay = document.querySelector('screen-overlay');

        this.menuNeedsHiding = window.innerWidth < 1024;
        !this.menuNeedsHiding ? this.navMenuContainer.classList.remove('hidden') : null;

        this.closeNavBtn.addEventListener('click', (e) => this.openCloseNavMenu(e));
        this.openNavBtn.addEventListener('click', (e) => this.openCloseNavMenu(e));

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                this.overlay.hideOverlay();

                this.navMenuContainer.classList.remove('hidden');
                this.menuNeedsHiding = true;
            }

            if (window.innerWidth < 1024 && this.menuNeedsHiding) {
                this.navMenuContainer.classList.add('hidden');
                this.menuNeedsHiding = false;
            }
        });

    }

    openCloseNavMenu(e) {
        const clickedBtn = e.target.closest('custom-button');

        clickedBtn === this.openNavBtn ?
            this.navMenuContainer.classList.toggle('hidden') :
            this.overlay.toggleVisibility();
        clickedBtn === this.closeNavBtn ?
            this.navMenuContainer.classList.toggle('hidden') :
            this.overlay.toggleVisibility();
    }

}

customElements.define('nav-menu', NavMenu);

export { NavMenu }
