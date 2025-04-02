import type React from "react";
import { Avatar } from "antd";
import "./AppListItem.css";
import icBookmark from "../../../assets/ic_bookmark.png";
import icForward from "../../../assets/ic_forward.png";

interface AppListItemProps {
  status?: boolean;
  index?: number;
  title: string;
  provider: string;
  image: string;
  time?: string;
}

const AppListItem: React.FC<AppListItemProps> = ({
  status,
  index,
  title,
  provider,
  image,
  time,
}) => {
  return (
    <div className="app-list-item">
      {index && <span className="app-list-item-index">{index}.</span>}
      <div className="app-list-item-info">
        <Avatar src={image} size={40} />
        <div className="app-list-item-details">
          <h3 className="app-list-item-title">{title}</h3>
          <p className="app-list-item-provider">{provider}</p>
        </div>
      </div>
      <div className="app-list-item-actions">
        {time ? (
          <span className="app-list-item-time">{time}</span>
        ) : (
          <>
            {!status ? (
              <button className="app-list-item-button active">
                <img src={icBookmark} alt="" />
                Theo dõi
              </button>
            ) : (
              <button className="app-list-item-button deactive">
                <img src={icForward} alt="" />
                Đã theo dõi
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AppListItem;
