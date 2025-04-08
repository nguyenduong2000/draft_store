import "./Download.css";
import { Col, Row, Tabs } from "antd";
import { AppCard } from "../../components/home/AppCard";
import FeaturedApp from "../../components/home/FeaturedApp/FeaturedApp";
import { featuredApps, trendingApps } from "../home/Home";
import { BannerThumbnails } from "../../components/download/banner-thumbnail";
import AppHighlight from "../../components/download/app-higlight/AppHighlight";
import appHiglight from "../../assets/app.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Download() {
  return (
    <div className="download-page flow-x-hidden">
      <Row gutter={24}>
        <Col xs={{span: 24, order: 2}} sm={{span: 24, order: 2}} md={{span: 24, order: 1}} lg={{span: 15, order: 1}} xl={{span: 18, order: 1}}>
          {/* Banner Apps Section */}
          <section className="download-banner">
            <BannerThumbnails />
          </section>

          {/* Related Apps Section */}
          <section className="download-related-apps">
            <h2 className="download-section-title">Ứng dụng cùng đơn vị</h2>
            <div className="download-app-grid">
              <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                  },
                  375: {
                    slidesPerView: 2.3, // Mobile
                  },
                  768: {
                    slidesPerView: 2.5, // Tablet
                  },
                  1024: {
                    slidesPerView: 3, // Desktop small
                  },
                  1150: {
                    slidesPerView: 3, // Desktop small
                  },
                }}
              >
                {trendingApps.map((app, index) => (
                  <SwiperSlide key={index}>
                    <FeaturedApp title={app.title} image={app.image} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* Trending Apps Section */}
          <section className="download-trending-apps">
            <div className="download-section-header">
              <h2 className="download-section-title">Ứng dụng nổi bật</h2>
              <Tabs
                defaultActiveKey="all"
                items={[
                  { key: "all", label: "Tất cả" },
                  { key: "cat1", label: "Danh mục 1" },
                  { key: "cat2", label: "Danh mục 2" },
                  { key: "cat3", label: "Danh mục 3" },
                ]}
              />
            </div>

            <div className="download-app-grid">
              <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                  },
                  375: {
                    slidesPerView: 1.3, // Mobile
                  },
                  500: {
                    slidesPerView: 2, // Mobile
                  },
                  768: {
                    slidesPerView: 2, // Tablet
                  },
                  1024: {
                    slidesPerView: 2, // Desktop small
                  },
                  1150: {
                    slidesPerView: 2, // Desktop small
                  },
                }}
              >
                {featuredApps.map((app, index) => (
                  <SwiperSlide key={index}>
                    <AppCard
                      title={app.title}
                      provider={app.provider}
                      rating={app.rating}
                      downloads={app.downloads}
                      image={app.image}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </Col>
        <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} md={24} lg={9} xl={6}>
          {/* App Highlight Section */}
          <AppHighlight
            rate={3.1}
            name="TV360 - Truyền hình trực tuyến"
            desc="Đơn vị VIETTEL TELECOM"
            numberOfDownloads={2000}
            img={appHiglight}
            onBlock={() => {}}
            onFollow={() => {}}
            onReport={() => {}}
            onDownload={() => {}}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Download;
