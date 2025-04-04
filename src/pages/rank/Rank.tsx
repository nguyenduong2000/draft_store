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
      <div className="search-container">
        <img src={icSearch} alt="" />
        <input type="text" placeholder="Tìm kiếm ứng dụng" />
      </div>
    );
  };

  return (
    <div className="wrapper-rank">
      <div className="header-rank">
        <h3>Bảng xếp hạng</h3>
        <div className="filter-block">
          <SearchComponent />
          <div className="btn-filter">
            <img src={icFilter} alt="icon filter" />
            <span>Filter</span>
          </div>
        </div>
      </div>
      <div className="table-rank-container">
        <ul className="rank-list">
          {ranks.length > 0 &&
            ranks.map((item, index) => (
              <li
                className={`${
                  index === 0 ? "app-list-item-top-1" : "app-list-item"
                }`}
              >
                <div className="flex items-center">
                  <div style={{ width: "65px", textAlign: "center", paddingRight:"16px" }}>
                    <label className={index === 0 ? " color-white" : " "}>
                      {index + 1}
                    </label>
                  </div>
                  <div className="app-list-item-info">
                    <Avatar src={item.img} size={40} />
                    <div className="app-list-item-details">
                      <h3
                        className={
                          "app-list-item-title" +
                          (index === 0 ? " color-white" : "")
                        }
                      >
                        {item.title}
                      </h3>
                      <p
                        className={
                          "app-list-item-provider" +
                          (index === 0 ? " color-gray" : "")
                        }
                      >
                        {item.provider}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="app-card-stats">
                  <div
                    className={`${
                      index === 0 ? "app-card-rating-top-1" : "app-card-rating"
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
                      "app-card-downloads" + (index === 0 ? " color-white" : "")
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
