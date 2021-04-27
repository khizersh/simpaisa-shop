import React from "react";
import "./footer.style.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-area">
        <section className="left-blocks-container">
          <div className="socials-container">
            <p className="social-title">Stay updated with us:</p>
            <div className="footer__social-media-container">
              <a
                href="#"
                className="social-icon-container"
                aria-label="simpaisashop Official Facebook"
                rel="noopener"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            </div>
          </div>

          <div className="support-container">
            <p className="support-title">Need help?</p>
            <div className="support-icons"></div>
            <a
              href="#"
              className="support-link"
              aria-label="Contact simpaisashop support"
              rel="noopener"
            >
              <div className="contact-icon pr-2">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-text">Contact Us</div>
            </a>
          </div>
          <div className="international-container">
            <a href="#" className="international-flag-block" rel="noopener">
              <i className="far fa-flag"></i>

              <div className="international__country-name">Pakistan</div>
            </a>
          </div>
        </section>

        <section className="right-blocks-container">
          <div className="legal-content-container">
            <a href="#" rel="noopener">
              Marketing &amp; Partnerships
            </a>

            <a href="#" rel="noopener">
              Terms &amp; Conditions
            </a>
            <a href="#" rel="noopener">
              Privacy Policy
            </a>
            <div className="copyright-container">
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
