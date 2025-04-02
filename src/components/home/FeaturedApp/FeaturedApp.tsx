import type React from "react";
import "./FeaturedApp.css";

interface FeaturedAppProps {
  title: string;
  image: string;
}

const FeaturedApp: React.FC<FeaturedAppProps> = ({ title, image }) => {
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
