import React from "react";
import "./styles.css";
import icStar from "../../../assets/ic_star.png";
import imageApp from "../../../assets/image_app.png";
import icArrowRight from "../../../assets/ic_arrow_right.png";
import { AppCard } from "../AppCard";
import { Col, Row, Tabs } from "antd";

export interface ICategoryProps {
  categories: Array<any>;
}



function Category(props: ICategoryProps) {
  const { categories } = props;

  return (
    <>
      
    </>
  );
}

export default Category;
