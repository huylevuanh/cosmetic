import Slider from "react-slick";
import "./BannerSlider.scss";
import { ProductSliderImage } from "../../../../constants";
import Button from "../../../../components/Button/Button";
const BannerSlider = () => {
  const settings = {
    className: "center",
    fade: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {ProductSliderImage.map((item) => {
          return (
            <div className="img-container">
              <img src={item.src} />
            </div>
          );
        })}
      </Slider>

      <div className="description">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
        <Button variant="outline">Shop Here</Button>
      </div>
    </div>
  );
};

export default BannerSlider;
