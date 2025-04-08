import { Swiper, SwiperSlide } from "swiper/react";
import imgBanner from "../../../assets/banner_download_page.png";
import imgThumbnail0 from "../../../assets/thumbnail_0.png";
import imgThumbnail1 from "../../../assets/thumbnail_1.png";
import imgThumbnail2 from "../../../assets/thumbnail_2.png";
import imgThumbnail3 from "../../../assets/thumbnail_3.png";
import "./styles.css";

function BannerThumbnails() {
  return (
    <>
      <div className="banner-container">
        <div className="banner-image">
          <img src={imgBanner} alt="banner" />
        </div>
        <Swiper
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 3.3,
            },
            375: {
              spaceBetween: 10,
              slidesPerView: 3.3,
            },
            768: {
              spaceBetween: 10,
              slidesPerView: 4,
            },
            1024: {
              spaceBetween: 10,
              slidesPerView: 4,
            },
            1150: {
              spaceBetween: 10,
              slidesPerView: 4
            },
          }}
        >
          <SwiperSlide>
            <li className="banner-thumbnail-item">
              <img src={imgThumbnail0} alt="Thumbnail" />
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="banner-thumbnail-item">
              <img src={imgThumbnail1} alt="Thumbnail" />
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="banner-thumbnail-item">
              <img src={imgThumbnail2} alt="Thumbnail" />
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="banner-thumbnail-item">
              <img src={imgThumbnail3} alt="Thumbnail" />
            </li>
          </SwiperSlide>
        </Swiper>
        <section className="app-detail">
          <h3>Mô tả chi tiết</h3>
          <p>
            Run, climb, and jump in VR using a unique locomotion method that
            only needs the movement of your hands and arms. No buttons, no
            sticks, no teleportation. Push off of surfaces to jump and squeeze
            them with both hands to climb.
          </p>
          <p>
            There are four different game modes - From simple Tag, for up to 3
            players, or infection mode, with 4 or more. The Hunt game mode gives
            you a unique personal target to chase down. Paintbrawl is a team vs.
            team paintball battle using slingshots.
          </p>
          <p>
            here are four different game modes - From simple Tag, for up to 3
            players, or infection mode, with 4 or more. The Hunt game mode gives
            you a unique personal target to chase down. Paintbrawl is a team vs.
            team paintball battle using slingshots.
          </p>
        </section>
      </div>
    </>
  );
}

export default BannerThumbnails;
