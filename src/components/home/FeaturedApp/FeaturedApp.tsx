import type React from "react";
import "./FeaturedApp.css";
import { BaseHTMLAttributes } from "react";

interface FeaturedAppProps<T> extends BaseHTMLAttributes<T> {
  title: string;
  image: string;
}

const FeaturedApp = <T extends HTMLElement>({
  title,
  image,
}: FeaturedAppProps<T>) => {
  return (
    <div className="featured-app">
      <div className="featured-app-image-container">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="featured-app-image"
        />
      </div>
      <div className="featured-app-overlay">
        <h3 className="featured-app-title">{title}</h3>
      </div>
    </div>
  );
};

export default FeaturedApp;
