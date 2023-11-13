class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navi">
                <button class="logo"> <a href="index.html">PRIVACY</a></button>
     
                <ul class = 'link-group'>
                    <li><a href="pricing.html">Pricing & Plans</a></li>
                    <li><a href="virtualCards.html">What are Virtual Cards ?</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="aboutUs.html">About Us</a></li>
                    <li><a href="blog.html">Blog</a></li>
                </ul>
     
                <div class = "btn-group">
                    <button class="neutral-btn">Log in</button>
                    <button class="primary-btn">Sign Up &rarr; </button>
                </div>
            </nav>
        `;
    }
}

customElements.define('special-header', SpecialHeader);




customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
