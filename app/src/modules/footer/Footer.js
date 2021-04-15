import React from "react";
import "./footer.style.css";

const Footer = () => {
  return (
    <footer class="footer-container">
      <div class="footer-area">
        <section class="left-blocks-container">
          <div class="socials-container">
            <p class="social-title">Stay updated with us:</p>
            <div class="footer__social-media-container">
              <a
                href="#"
                class="social-icon-container"
                aria-label="simpaisashop Official Facebook"
                rel="noopener"
              >
                <i class="fab fa-facebook fa-2x"></i>
              </a>
            </div>
          </div>

          <div class="support-container">
            <p class="support-title">Need help?</p>
            <div class="support-icons"></div>
            <a
              href="#"
              class="support-link"
              aria-label="Contact simpaisashop support"
              rel="noopener"
            >
              <div class="contact-icon pr-2">
                <i class="fas fa-phone"></i>
              </div>
              <div class="contact-text">Contact Us</div>
            </a>
          </div>
          <div class="international-container">
            <a href="#" class="international-flag-block" rel="noopener">
              <i class="far fa-flag"></i>

              <div class="international__country-name">Pakistan</div>
            </a>
          </div>
        </section>

        <section class="right-blocks-container">
          <div class="legal-content-container">
            <a href="#" rel="noopener">
              Marketing &amp; Partnerships
            </a>

            <a href="#" rel="noopener">
              Terms &amp; Conditions
            </a>
            <a href="#" rel="noopener">
              Privacy Policy
            </a>
            <div class="copyright-container">
              {" "}
              © Copyright simpaisa Payments{" "}
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
