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

                <div>
                    <img class = "hamburger" src="/assets/images/hamburger.svg" alt=""> 

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

class SpecialAccordion extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="accordion">
        <h2> FAQs </h2>
        <sl-details summary="What is a virtual card and what is a Privacy Card?">
            A virtual card is a unique 16-digit card number with a CVV code and expiration date that can be generated instantly and used to make purchases online or over the phone. Think of it as a normal credit or debit card, but without the physical plastic card.

            <span class="accordion-span">A Privacy Card is a virtual card that masks your actual payment information. By using a Privacy Card to check out, you can keep your true financial information private from merchants, malicious third parties, and fraudulent actors. Privacy Cards have additional security features that shield you from fraud and unwarranted transactions.</span>
          </sl-details>
        <sl-details summary="Why should I use Privacy virtual cards over my debit card or credit card?">
            The FTC reported that more than 2.3 million consumers in the U.S. experienced fraud in 2022, equating to nearly $9 billion in losses. Privacy helps you defend against card theft and fraudulent charges.
            <br>
            <span class="accordion-span">Privacy Cards automatically “lock” to the first merchant they’re used at and can never be used anywhere else if they’re stolen or compromised in a data breach. Privacy Cards can also be set for one-time use so they automatically close after a single transaction. These built-in protections have helped our users transact with confidence and save money that would have otherwise been lost in a security breach.</span>
            <br>
            Privacy gives you greater control over your spending. You can set customizable spending limits on cards to track and maintain budgets at specific merchants and block hidden fees. If a transaction attempt goes over the limit, we automatically decline it. You can also easily pause, unpause, and close Privacy Cards at any time to manage subscriptions and avoid being overcharged
        
            
            Privacy makes it easy to share secure payment information with trusted friends, family members, or employees. With one click, you can share a Privacy Card instead of having to share and expose your real debit or credit card details. Any cards you share will lock to the first merchant they're used with, and you can still adjust spending limits and close the card at your discretion. The card sharing feature is handy for parents setting an allowance card for their kids or small business owners looking to distribute cards to employees.
            </sl-details>
          
            <sl-details summary="Why does Privacy need my personal information when I’m signing up?">
                Some personal information is required for a mandatory bank verification procedure called Know Your Customer (KYC) that must be conducted before our customers can start using our Privacy virtual cards. This verification process is required to comply with anti-money laundering laws and helps protect against fraud. 
            </sl-details>
          
            <sl-details summary="How does Privacy make money?">
                Privacy, like other card companies, collects transaction fees called interchange from merchants. We don't, and will never, sell our customers' data.
            </sl-details>
            <sl-details summary="Does using Privacy affect my credit score?">
                No. Privacy never conducts a credit pull. Using our Privacy Cards will not have any impact on your credit score, and Privacy Cards will not show up on your credit report. You can read more about this here.
            </sl-details>
            <sl-details summary="Is Privacy safe to use?">
                The security of our customers’ personal information and data is critical to everything we do. Privacy is PCI-DSS compliant and is held to the same security standards as a bank. For more information, review our security policies.
            </sl-details>
            <sl-details summary="Who can use Privacy and do you need a bank account?">
                Privacy is currently available to US citizens or legal residents with a checking account at a US bank or credit union, and who are 18+ years of age.
            </sl-details>
          </div>
    </section>   
        `
        }
    }










customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
customElements.define('special-accordion', SpecialAccordion)



    const buotn = document.querySelector('.hamburger');
    const newNav = document.querySelector('.link-group');

    buotn.addEventListener('click', () => {
        newNav.classList.toggle('show');
        console.log('Button clicked! NewNav class toggled.');
    });


