import "./Home.css";
import Banner from "../../components/home/banner/Banner";
import { Col, Row, Tabs } from "antd";
import banner from "../../assets/banner.png";
import imgApp from "../../assets/image_app.png";
import { AppCard } from "../../components/home/AppCard";
import FeaturedApp from "../../components/home/FeaturedApp/FeaturedApp";
import { Content } from "antd/es/layout/layout";
import AppListItem from "../../components/home/AppListItem/AppListItem";
import img_trending_1 from "../../assets/trending_1.png"
import img_trending_2 from "../../assets/trending_2.png"
import img_trending_3 from "../../assets/trending_3.png"

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
];

export const trendingApps = [
  {
    id: 1,
    title: "Viettel Post",
    provider: "Viettel IDC",
    rating: 4.7,
    downloads: 1890,
    image: img_trending_1
  },
  {
    id: 2,
    title: "MyGo",
    provider: "Viettel IDC",
    rating: 4.6,
    downloads: 1750,
    image: img_trending_2
  },
  {
    id: 3,
    title: "My Dio",
    provider: "Viettel IDC",
    rating: 4.5,
    downloads: 1620,
    image: img_trending_3
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
    <div className="flow-x-hidden">
      <Row gutter={24}>
        <Col xs={24} sm={24} md={24} lg={18}>
          <Banner banners={[banner, banner, banner, banner]} />

          {/* Featured Apps Section */}
          <section className="section-container mt-42">
            <div className="section-header">
              <h2 className="section-title">Ứng dụng nội bộ</h2>
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

            <div className="app-grid">
              <Row gutter={[24, 24]}>
                {featuredApps.map((app) => (
                  <Col xs={24} sm={12} lg={12} key={app.id}>
                    <AppCard
                      title={app.title}
                      provider={app.provider}
                      rating={app.rating}
                      downloads={app.downloads}
                      image={app.image}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          {/* Trending Apps Section */}
          <section className="section-container">
            <h2 className="section-title">Ứng dụng thịnh hành</h2>
            <div className="app-grid">
              <Row gutter={[24, 24]}>
                {trendingApps.map((app) => (
                  <Col xs={24} sm={12} lg={8} key={app.id}>
                    <FeaturedApp title={app.title} image={app.image} />
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          {/* Apps by Category Section */}
          <section className="section-container">
            <div className="section-header">
              <h2 className="section-title">Ứng dụng theo dơn vị</h2>
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

            <div className="app-grid">
              <Row gutter={[24, 24]}>
                {featuredApps.map((app) => (
                  <Col xs={24} sm={12} lg={12} key={`category-${app.id}`}>
                    <AppCard
                      title={app.title}
                      provider={app.provider}
                      rating={app.rating}
                      downloads={app.downloads}
                      image={app.image}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </section>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          {/* Recent Apps Section */}
          <section className="section-container">
            <Row gutter={24}>
              <Col xs={24} sm={12} md={12} lg={24}>
                <div
                  className="panel-container"
                  style={{ marginBottom: "24px" }}
                >
                  <h2 className="panel-title">Ứng dụng nổi bật</h2>
                  <div className="app-list">
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
                <div className="panel-container">
                  <h2 className="panel-title">Ứng dụng gần đây</h2>
                  <div className="app-list">
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
