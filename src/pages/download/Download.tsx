import "./Download.css";
import { Col, Row, Tabs } from "antd";
import { AppCard } from "../../components/home/AppCard";
import FeaturedApp from "../../components/home/FeaturedApp/FeaturedApp";
import { featuredApps, trendingApps } from "../home/Home";
import { BannerThumbnails } from "../../components/download/banner-thumbnail";
import AppHighlight from "../../components/download/app-higlight/AppHighlight";
import appHiglight from "../../assets/app.png";

function Download() {
  return (
    <div className="download-page flow-x-hidden">
      <Row gutter={24}>
        <Col xs={24} sm={24} md={24} lg={18}>
          {/* Banner Apps Section */}
          <section className="download-banner">
            <BannerThumbnails />
          </section>

          {/* Related Apps Section */}
          <section className="download-related-apps">
            <h2 className="download-section-title">Ứng dụng cùng đơn vị</h2>
            <div className="download-app-grid">
              <Row gutter={[24, 24]}>
                {trendingApps.map((app) => (
                  <Col xs={24} sm={12} lg={8} key={app.id}>
                    <FeaturedApp title={app.title} image={app.image} />
                  </Col>
                ))}
              </Row>
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
