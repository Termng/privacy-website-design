class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navi">
                <button class="logo"> <a href="/index.html">PRIVACY</a></button>
     
                <ul class = 'link-group'>
                    <li><a href="/pages/pricing.html">Pricing & Plans</a></li>
                    <li><a href="/pages/virtualCards.html">What are Virtual Cards ?</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="/pages/aboutUs.html">About Us</a></li>
                    <li><a href="/pages/blog.html">Blog</a></li>
                </ul>
     
                <div class = "btn-group">
                    <button class="neutral-btn">Log in</button>
                    <button class="primary-btn">Sign Up &rarr; </button>
                </div>
            </nav>
        `;
    }
}


class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <footer>
        <div class="footer">
            <div class="foot-item">
                <a href="#" class="foot-head">Product</a>
                <ul class="foot-links">
                    <li><a href="#"><i class="fab fa-chrome fa-lg"></i> Get privacy for Chrome</a></li>
                    <li><a href="#"> <i class="fab fa-firefox-browser fa-lg"></i> Get privacy for Firefox</a></li>
                    <li><a href="#"> <i class="fab fa-safari fa-lg"></i> Get privacy for Safari</a></li>
                    <li><a href="#"> <i class="fab fa-edge fa-lg"></i> Get privacy for Edge</a></li>
                    <li><a href="#"> <i class="fab fa-apple fa-lg"></i> Get privacy for iOS</a></li>
                    <li><a href="#"> <i class="fab fa-android fa-lg"></i> Get privacy for Android</a></li>
                    <li><a href="#">Pricing & Plans</a></li>
                </ul>
            </div>
            <div class="foot-item">
                <a href="#" class="foot-head">About Virtual Cards</a>
                <ul class="foot-links">
                    <li><a href="#">Virtual Cards</a></li>
                    <li><a href="#">Unique Card Numbers</a></li>
                    <li><a href="#"> Card security</a></li>
                </ul>
            </div>
            <div class="foot-item">
                <a href="#" class="foot-head">Resources</a>
                <ul class="foot-links">
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Legal Compliance</a></li>
                    <li><a href="#">Status</a></li>
                </ul>
            </div>
            <div class="foot-item">
                <a href="#" class="foot-head">Company</a>
                <ul class="foot-links">
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div class="foot-item">
                <a href="#" class="foot-head">Contact Us</a>
                <ul class="foot-links">
                    <li><a href="#">Email</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
        
            <div class="trademark-group">
                <p class="trademark">For users on the Privacy Personal plan,
                    there are no fees on domestic transactions
                    and foreign transactions incur a 3% fee ($0.50 minimum).
                    Users on our Pro and Premium plans do not incur foreign
                    transaction fees. Refer to your cardholder agreement for details.
                </p>
                
                <p class="trademark">
                    The Privacy card is issued by Patriot Bank, N.A.,
                    pursuant to licenses from Mastercard® International
                    Incorporated and Visa U.S.A. Inc. and may be used everywhere
                    Mastercard and Visa are accepted. Mastercard is a registered
                    trademark of Mastercard International.
                </p>
            </div>
            
            
            
        </div>

        <div class="foot-images">
            <img src="/assets/images/privacyLogo.svg" alt="">
            <img src="/assets/images/acredited.svg" alt="">
        </div>
    
    
    </footer>
            
        `;
    }
}










customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
