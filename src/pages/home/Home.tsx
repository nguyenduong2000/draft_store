import "./Home.css";
import Banner from "../../components/home/banner/Banner";
import { Col, Row, Tabs } from "antd";
import banner from "../../assets/banner.png";
import imgApp from "../../assets/image_app.png";
import { AppCard } from "../../components/home/AppCard";
import FeaturedApp from "../../components/home/FeaturedApp/FeaturedApp";
import AppListItem from "../../components/home/AppListItem/AppListItem";
import img_trending_1 from "../../assets/trending_1.png";
import img_trending_2 from "../../assets/trending_2.png";
import img_trending_3 from "../../assets/trending_3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface IHomeProps {}

export const featuredApps = [
  {
    id: 1,
    title: "Viettel Money",
    provider: "Viettel Digital Services",
    rating: 4.8,
    downloads: 2145,
    image: imgApp,
  },
  {
    id: 2,
    title: "Viettel Home",
    provider: "Tổng công ty viễn thông Viettel - VTT",
    rating: 4.8,
    downloads: 2145,
    image: imgApp,
  },
  {
    id: 2,
    title: "Viettel Home",
    provider: "Tổng công ty viễn thông Viettel - VTT",
    rating: 4.8,
    downloads: 2145,
    image: imgApp,
  },
  {
    id: 2,
    title: "Viettel Home",
    provider: "Tổng công ty viễn thông Viettel - VTT",
    rating: 4.8,
    downloads: 2145,
    image: imgApp,
  },
];

export const trendingApps = [
  {
    id: 1,
    title: "Viettel Post",
    provider: "Viettel IDC",
    rating: 4.7,
    downloads: 1890,
    image: img_trending_1,
  },
  {
    id: 2,
    title: "MyGo",
    provider: "Viettel IDC",
    rating: 4.6,
    downloads: 1750,
    image: img_trending_2,
  },
  {
    id: 3,
    title: "My Dio",
    provider: "Viettel IDC",
    rating: 4.5,
    downloads: 1620,
    image: img_trending_3,
  },
  {
    id: 1,
    title: "Viettel Post",
    provider: "Viettel IDC",
    rating: 4.7,
    downloads: 1890,
    image: img_trending_1,
  },
  {
    id: 2,
    title: "MyGo",
    provider: "Viettel IDC",
    rating: 4.6,
    downloads: 1750,
    image: img_trending_2,
  },
  {
    id: 3,
    title: "My Dio",
    provider: "Viettel IDC",
    rating: 4.5,
    downloads: 1620,
    image: img_trending_3,
  },
];

export const popularApps = [
  {
    id: 1,
    title: "Viettel Post",
    provider: "Viettel IDC",
    rating: 4.7,
    downloads: 1890,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    title: "Viettel Post",
    provider: "Viettel IDC",
    rating: 4.7,
    downloads: 1890,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    title: "Viettel Post",
    provider: "Viettel IDC",
    rating: 4.7,
    downloads: 1890,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    title: "Viettel Post",
    provider: "Viettel IDC",
    rating: 4.7,
    downloads: 1890,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    title: "Viettel Post",
    provider: "Viettel IDC",
    rating: 4.7,
    downloads: 1890,
    image: "/placeholder.svg?height=40&width=40",
  },
];

export const recentApps = [
  {
    id: 1,
    title: "Viettel Post",
    provider: "Viettel IDC",
    rating: 4.7,
    downloads: 1890,
    image: "/placeholder.svg?height=40&width=40",
    time: "1 giờ trước",
  },
  {
    id: 2,
    title: "Viettel Post",
    provider: "Viettel IDC",
    rating: 4.7,
    downloads: 1890,
    image: "/placeholder.svg?height=40&width=40",
    time: "1 giờ trước",
  },
  {
    id: 3,
    title: "Viettel Post",
    provider: "Viettel IDC",
    rating: 4.7,
    downloads: 1890,
    image: "/placeholder.svg?height=40&width=40",
    time: "1 giờ trước",
  },
  {
    id: 4,
    title: "Viettel Post",
    provider: "Viettel IDC",
    rating: 4.7,
    downloads: 1890,
    image: "/placeholder.svg?height=40&width=40",
    time: "1 giờ trước",
  },
  {
    id: 5,
    title: "Viettel Post",
    provider: "Viettel IDC",
    rating: 4.7,
    downloads: 1890,
    image: "/placeholder.svg?height=40&width=40",
    time: "1 giờ trước",
  },
];

export default function Home(props: IHomeProps) {
  return (
    <div className="home-flow-x-hidden">
      <Row gutter={24}>
        <Col xs={24} sm={24} md={24} lg={18}>
          <Banner banners={[banner, banner, banner, banner]} />

          {/* Featured Apps Section */}
          <section className="home-section-container mt-42">
            <div className="home-section-header">
              <h2 className="home-section-title">Ứng dụng nội bộ</h2>
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

            <div className="home-app-grid">
              <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                  },
                  375: {
                    slidesPerView: 1.3, // Mobile
                  },
                  500:{
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

          {/* Trending Apps Section */}
          <section className="home-section-container">
            <h2 className="home-section-title">Ứng dụng thịnh hành</h2>
            <div className="home-app-grid">
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

          {/* Apps by Category Section */}
          <section className="home-section-container">
            <div className="home-section-header">
              <h2 className="home-section-title">Ứng dụng theo dơn vị</h2>
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

            <div className="home-app-grid">
              <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                  },
                  375: {
                    slidesPerView: 1.3, // Mobile
                  },
                  500:{
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
        <Col xs={24} sm={24} md={24} lg={6}>
          {/* Recent Apps Section */}
          <section className="home-section-container">
            <Row gutter={24}>
              <Col xs={24} sm={12} md={12} lg={24}>
                <div
                  className="home-panel-container"
                  style={{ marginBottom: "24px" }}
                >
                  <h2 className="home-panel-title">Ứng dụng nổi bật</h2>
                  <div className="home-app-list">
                    {popularApps.map((app) => (
                      <AppListItem
                        key={app.id}
                        title={app.title}
                        provider={app.provider}
                        image={app.image}
                      />
                    ))}
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={12} md={12} lg={24}>
                <div className="home-panel-container">
                  <h2 className="home-panel-title">Ứng dụng gần đây</h2>
                  <div className="home-app-list">
                    {recentApps.map((app) => (
                      <AppListItem
                        key={app.id}
                        title={app.title}
                        provider={app.provider}
                        time={app.time}
                        image={app.image}
                      />
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </div>
  );
}
