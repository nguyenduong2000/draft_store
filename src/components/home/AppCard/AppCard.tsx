import type React from "react"
import { Rate } from "antd"
import icArrowRight from "../../../assets/ic_arrow_right.png"
import imgApp from "../../../assets/image_app.png"
import "./styles.css"
import { BaseHTMLAttributes } from "react"

interface AppCardProps<T> extends BaseHTMLAttributes<T> {
  title: string
  provider: string
  rating: number
  downloads: number
  image: string
}

const AppCard = <T extends HTMLElement> ({ title, provider, rating, downloads, image }: AppCardProps<T>) => {
  return (
    <div className="app-card">
      <div className="app-card-image-container">
        <img src={image || imgApp} alt={title} className="app-card-image" />
      </div>
      <div className="app-card-content">
        <h3 className="app-card-title">{title}</h3>
        <p className="app-card-provider">{provider}</p>
        <div className="app-card-footer">
          <div className="app-card-stats">
            <div className="app-card-rating">
              <span>{rating}</span>
              <Rate disabled defaultValue={1} count={1} style={{ fontSize: "14px", color: "#f59e0b", lineHeight:"10px" }} />
            </div>
            <span className="app-card-downloads">{downloads} lượt tải</span>
          </div>
          <button className="app-card-button">
            <img src={icArrowRight} alt="icon arrow right"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppCard

