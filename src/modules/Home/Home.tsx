import { weeklyProduct } from "../../constants";
import BannerSlider from "./components/BannerSlider/BannerSlider";
import {
  InstagramOutlined,
  FacebookOutlined,
  PhoneFilled,
} from "@ant-design/icons";

import { Modal } from "antd";
import "./Home.scss";
import { useState } from "react";
import storeImg from "../../assets/store/store_image.jpg";
import { socialMediaLink } from "../../routes/extenalLink";

const Home = () => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <>
      <Modal
        centered
        open={openModal === true}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={800}
        className="main-modal"
        cancelButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        <img src={storeImg} />
        <div className="reach-out-product">
          <span>Reach out our product on social media</span>
          <div className="contact-method">
            <InstagramOutlined
              onClick={() => window.open(socialMediaLink.insta)}
            />
            <PhoneFilled onClick={() => window.open(socialMediaLink.insta)} />
            <FacebookOutlined
              onClick={() => window.open(socialMediaLink.insta)}
            />
          </div>
        </div>
      </Modal>
      <div className="homepage-container">
        <BannerSlider />
        <div className="introduction-card-list">
          <div className="introduction-card">
            <span>Family Owned</span>
            <h3 className="text-uppercase">Brand</h3>
            <span>Read our story</span>
          </div>

          <div className="introduction-card">
            <span>Genuine</span>
            <h3 className="text-uppercase">Product</h3>
            <span>About our product</span>
          </div>

          <div className="introduction-card">
            <span>Created in</span>
            <h3 className="text-uppercase">Vietnam</h3>
            <span>Learn our process</span>
          </div>
        </div>

        <div className="weekly-product">
          <div className="title">Weekly our best seller</div>
          <div className="img-container">
            {weeklyProduct.map((item) => {
              return <img src={item.img} alt="product" />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
