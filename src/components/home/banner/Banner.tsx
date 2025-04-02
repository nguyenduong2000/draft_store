import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"

export interface IBannerProps {
  banners: Array<any>;
}

function Banner(props: IBannerProps) {
  const { banners } = props;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div>
      <Slider {...settings}>
        {banners.length > 0 &&
          banners.map((item, index) => (
            <div key={index}>
              <img style={{margin:'0 auto'}} width={'100%'} src={item} alt="banner"/>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Banner;
