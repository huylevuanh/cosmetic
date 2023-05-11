import "./Header.scss";
import { InstagramOutlined } from "@ant-design/icons";

import { FacebookFilled } from "@ant-design/icons";
import { socialMediaLink } from "../../routes/extenalLink";
const Header = () => {
  return (
    <div className="header-container">
      <span className="text-uppercase ">The Lazarus</span>
      <span className="our-story">Our Story</span>

      <div className="social-link">
        <span>Discover our product on: </span>
        <InstagramOutlined onClick={() => window.open(socialMediaLink.insta)} />
        <FacebookFilled onClick={() => window.open(socialMediaLink.facebook)} />
      </div>
    </div>
  );
};

export default Header;
