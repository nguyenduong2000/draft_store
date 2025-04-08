import { Avatar, Rate } from "antd";
import icFilter from "../../assets/ic_filter.png";
import icSearch from "../../assets/ic_search.png";
import "./Rank.css";

const ranks = [
  {
    img: "",
    title: "Viettel Post",
    provider: "Viettel IDC",
    rate: 4.8,
    downloads: 21212,
  },
  {
    img: "",
    title: "Viettel Home",
    provider: "Tổng công ty viễn thông Viettel - VTT",
    rate: 4.8,
    downloads: 21212,
  },
  {
    img: "",
    title: "Viettel Home",
    provider: "Tổng công ty viễn thông Viettel - VTT",
    rate: 4.8,
    downloads: 21212,
  },
  {
    img: "",
    title: "Viettel Home",
    provider: "Tổng công ty viễn thông Viettel - VTT",
    rate: 4.8,
    downloads: 21212,
  },
  {
    img: "",
    title: "Viettel Home",
    provider: "Tổng công ty viễn thông Viettel - VTT",
    rate: 4.8,
    downloads: 21212,
  },
  {
    img: "",
    title: "Viettel Home",
    provider: "Tổng công ty viễn thông Viettel - VTT",
    rate: 4.8,
    downloads: 21212,
  },
  {
    img: "",
    title: "Viettel Home",
    provider: "Tổng công ty viễn thông Viettel - VTT",
    rate: 4.8,
    downloads: 21212,
  },
  {
    img: "",
    title: "Viettel Home",
    provider: "Tổng công ty viễn thông Viettel - VTT",
    rate: 4.8,
    downloads: 21212,
  },
  {
    img: "",
    title: "Viettel Home",
    provider: "Tổng công ty viễn thông Viettel - VTT",
    rate: 4.8,
    downloads: 21212,
  },
  {
    img: "",
    title: "Viettel Home",
    provider: "Tổng công ty viễn thông Viettel - VTT",
    rate: 4.8,
    downloads: 21212,
  },
];

function Rank() {
  const SearchComponent = () => {
    return (
      <div className="rank-search-container">
        <img src={icSearch} alt="" />
        <input type="text" placeholder="Tìm kiếm ứng dụng" />
      </div>
    );
  };

  return (
    <div className="rank-wrapper-rank">
      <div className="rank-header-rank">
        <h3>Bảng xếp hạng</h3>
        <div className="rank-filter-block">
          <SearchComponent />
          <div className="rank-btn-filter">
            <img src={icFilter} alt="icon filter" />
            <span>Filter</span>
          </div>
        </div>
      </div>
      <div className="rank-table-rank-container">
        <ul className="rank-rank-list">
          {ranks.length > 0 &&
            ranks.map((item, index) => (
              <li
                key={index}
                className={`rank-app-list-item ${index === 0 ? "top-1" : ""}`}
              >
                <div className="rank-app-list-item-index">
                  <label className={index === 0 ? "rank-color-white" : " "}>
                    {index + 1}
                  </label>
                </div>
                <div className="rank-app-list-item-info">
                  <Avatar src={item.img} size={40} />
                </div>
                <div className="rank-app-list-item-details">
                  <div>
                    <h3
                      className={
                        "rank-app-list-item-title" +
                        (index === 0 ? " rank-color-white" : "")
                      }
                    >
                      {item.title}
                    </h3>
                    <p
                      className={
                        "rank-app-list-item-provider" +
                        (index === 0 ? " rank-color-gray" : "")
                      }
                    >
                      {item.provider}
                    </p>
                  </div>
                  <div className="rank-app-card-stats">
                    <div
                      className={`rank-app-card-rating ${
                        index === 0 ? "top-1" : ""
                      }`}
                    >
                      <span>{item.rate}</span>
                      <Rate
                        disabled
                        defaultValue={1}
                        count={1}
                        className="rate"
                      />
                    </div>
                    <span
                      className={
                        "rank-app-card-downloads" +
                        (index === 0 ? " rank-color-white" : "")
                      }
                    >
                      {item.downloads} lượt tải
                    </span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Rank;
