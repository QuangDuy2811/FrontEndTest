const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* Section nền đen (Subscribe) */}
      <div className="footer-subscribe">
        <div className="footer-subscribe-container">
          <div className="footer-subscribe-left">
            <h2 className="subscribe-title">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>
          <div className="footer-subscribe-right">
            <div className="email-input-wrapper">
              <span className="email-icon">✉️</span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="email-input"
              />
            </div>
            <button className="subscribe-button">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>

      {/* Section nền xám (Footer content) */}
      <div className="footer-main">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-title">SHOP.CO</h3>
            <p className="footer-description">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
            <div className="social-icons">
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-pinterest" />
            </div>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Help</h4>
              <ul>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>FAQ</h4>
              <ul>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>Shop.co © 2000–2023, All Rights Reserved</p>
          <div className="payment-icons">
            <img src="/visa-10.svg" alt="Visa" />
            <img src="/mastercard-modern-design-.svg" alt="Mastercard" />
            <img src="/paypal-3.svg" alt="Paypal" />
            <img src="/apple-pay-2.svg" alt="Apple Pay" />
            <img src="/google-pay-2.svg" alt="Google Pay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
