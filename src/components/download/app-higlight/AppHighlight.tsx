import "./styles.css";
import icBlock from "../../../assets/ic_block.png";
import icReport from "../../../assets/ic_report.png";
import icBookmark from "../../../assets/ic_bookmark_outline.png";
import { Rate } from "antd";

export interface IAppHiglightProps {
  rate: number;
  img: string;
  name: string;
  desc: string;
  numberOfDownloads: number;
  onFollow: () => void;
  onBlock: () => void;
  onReport: () => void;
  onDownload: (e: "IOS" | "ANDROID") => void;
}

function AppHighlight(props: IAppHiglightProps) {
  const {
    img,
    name,
    desc,
    numberOfDownloads,
    rate,
    onFollow,
    onBlock,
    onReport,
    onDownload,
  } = props;

  return (
    <section className="app-highlight">
      <div className="highlight-card">
        <div className="app-logo">
          <img src={img} alt="app higlight" width={60} height={60} />
        </div>
        <div className="app-details">
          <h3>{name}</h3>
          <p>{desc}</p>
          <div className="app-card-stats">
            <div className="app-card-rating">
              <span>{rate}</span>
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
            <span className="app-card-downloads">
              {numberOfDownloads} lượt tải
            </span>
          </div>
          <div className="app-actions">
            <button className="action-button" onClick={() => onFollow()}>
              <img src={icBookmark} alt="icBookmark" />
              Theo dõi
            </button>
            <button className="action-button" onClick={() => onBlock()}>
              <img src={icBlock} alt="icBlock" />
              Chặn
            </button>
            <button className="action-button" onClick={() => onReport()}>
              <img src={icReport} alt="icReport" />
              Báo cáo
            </button>
          </div>
          <div className="download-buttons">
            <button
              className="download-android"
              onClick={() => onDownload("ANDROID")}
            >
              Android
            </button>
            <button className="download-ios" onClick={() => onDownload("IOS")}>
              iOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppHighlight;
