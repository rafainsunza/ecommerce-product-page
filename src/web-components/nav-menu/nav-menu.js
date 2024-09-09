import html from './nav-menu.html';
import style from './nav-menu.sass';
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

            height: 100vh;
            width: 70%;
            padding: 30px;

            font-weight: 700;
            background-color: hsl(0, 0%, 100%);
        }         

        @media(min-width: 900px) {
            .nav-menu-container {
                position: static;
                display: flex;

                height: 100%;
                width: auto;
                padding: 0;

            }
        }

        .nav-items {
            display: flex;
            flex-direction: column;
        }

        .nav-link {
            color: hsl(220, 13%, 13%);

            padding: 15px 0;
        }

        @media(min-width: 900px) {
            .nav-items {
                flex-direction: row;

                margin-left: 40px;
            }

            .nav-link {
                display: flex;
                align-items: center;

                padding: 0 15px;

                height: 100%;
                border-bottom: 3px solid hsl(0, 0%, 100%);

                font-weight: 400;
                color: hsl(219, 9%, 45%);
            }

            .nav-link:hover {
                color: hsl(220, 13%, 13%);

                border-bottom: 3px solid hsl(26, 100%, 55%);
            }
        }

        .open-nav-btn {
            display: flex;
        }

        .close-nav-btn {
            margin-bottom: 30px;
        }

        @media(min-width: 900px) {
            .open-nav-btn {
                display: none;
            }

            .close-nav-btn {
                display: none;
            }
        }

        @media(max-width: 900px) {
            .hidden {
                display: none;
            }
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

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 900) {
                overlay.hideOverlay();
                navMenuContainer.classList.add('hidden');
            }
        })
    }

}

customElements.define('nav-menu', NavMenu);

export { NavMenu }
