import html from './nav-menu.html';
import style from './nav-menu.sass';

const template = document.createElement('template');
template.innerHTML = `
    <style>

    </style>
    ${html}
`;


class NavMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // const navItems = JSON.parse(this.getAttribute('nav-items'));
        // const navContainer = this.shadowRoot.querySelector('.nav-menu-container');
        // navItems.forEach((navItem) => {
        //     const navLink = document.createElement('a');
        //     navLink.href = `${navItem.toLowerCase()}`;
        //     navLink.textContent = navItem;
        //     navLink.className = 'nav-link';

        //     navContainer.appendChild(navLink)
        // })
    }

}

customElements.define('nav-menu', NavMenu);

export { NavMenu }
