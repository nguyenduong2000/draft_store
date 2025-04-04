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
                className={`${
                  index === 0
                    ? "rank-app-list-item-top-1"
                    : "rank-app-list-item"
                }`}
              >
                <div className="rank-flex rank-items-center">
                  <div
                    style={{
                      width: "65px",
                      textAlign: "center",
                      paddingRight: "16px",
                    }}
                  >
                    <label className={index === 0 ? "rank-color-white" : " "}>
                      {index + 1}
                    </label>
                  </div>
                  <div className="rank-app-list-item-info">
                    <Avatar src={item.img} size={40} />
                    <div className="rank-app-list-item-details">
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
                  </div>
                </div>
                <div className="rank-app-card-stats">
                  <div
                    className={`${
                      index === 0
                        ? "rank-app-card-rating-top-1"
                        : "rank-app-card-rating"
                    }`}
                  >
                    <span>{item.rate}</span>
                    <Rate
                      disabled
                      defaultValue={1}
                      count={1}
                      style={{
                        fontSize: "14px",
                        color: "#f59e0b",
                        lineHeight: "10px",
                      }}
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
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Rank;
