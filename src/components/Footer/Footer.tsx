import { socialMediaLink } from "../../routes/extenalLink";
import Button from "../Button/Button";
import "./Footer.scss";
import { RightOutlined } from "@ant-design/icons";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="first-block">
          <h3 className="text-uppercase">The Lazarus</h3>
          <span>
            85B Cao Thang St, 3rd Ward
            <br />
            District 3, HCMC
          </span>
          <span>thelazarus@gmail.com</span>
          <span>+84 933 393 398</span>
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
            Sign up for phone alerts
          </span>
          <div className="phone-number-input">
            <input placeholder="+84.... " />
            <Button variant="primary">
              <RightOutlined style={{ fontSize: "32px" }} />
            </Button>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <span>© 2023 The Lazarus, All Rights Reserved</span>
        <div className="d-flex social-link">
          <span onClick={() => window.open(socialMediaLink.facebook)}>
            Facebook
          </span>
          <span onClick={() => window.open(socialMediaLink.insta)}>
            Instagram
          </span>

          <span onClick={() => window.open(socialMediaLink.tiktok)}>
            Tiktok
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
