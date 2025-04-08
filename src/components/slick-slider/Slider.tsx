import { ReactNode } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode } from "swiper/modules";

interface ICustomSlideProps {
  children: ReactNode;
  data: Array<any>;
}

function CustomSlides({ children, data }: ICustomSlideProps) {
  return (
    <Swiper
      slidesPerView={1.2} // hiển thị 1 slide + 0.2 của slide kế tiếp
      spaceBetween={16}
    >
      {data.map((item, index)=>(
        <SwiperSlide key={index}>{children}</SwiperSlide>
      ))
      }
    </Swiper>
  );
}

export default CustomSlides;
