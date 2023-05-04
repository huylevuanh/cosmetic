import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="first-block">
          <h3 className="text-uppercase">The Lazarus</h3>
          <span>
            798 SW 2nd Ave, Miami, FL 33130 1498 Bryant St,
            <br />
            San Francisco, CA
          </span>
          <span>thelazarus@gmail.com</span>
          <span>+84 703 888888</span>
        </div>
        <div className="second-block">
          <h6>Help & Information</h6>
          <span>Help</span>
          <span>FAQ's</span>
          <span>Shipping</span>
          <span>Order Tracking</span>
        </div>
        <div className="third-block">
          <h6>About</h6>
          <span>Contact Us</span>
          <span>Journal</span>
          <span>Privacy Policy</span>
        </div>
        <div className="forth-block">
          <h6>Join Our Newsletter</h6>
          <span>
            Want exclusive offers and first access to products?
            <br />
            Sign up for email alerts
          </span>
        </div>
      </div>

      <div className="contact-info">
        <span>© 2023 The Lazarus, All Rights Reserved</span>
        <div className="d-flex social-link">
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
