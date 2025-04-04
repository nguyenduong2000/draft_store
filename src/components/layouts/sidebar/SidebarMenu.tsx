// Menu.tsx
import React, { useState } from "react";
import { Layout, Menu, Drawer } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

import "./sidebarMenu.css";
import HomeIcon from "../../../assets/svgs/HomeIcon";
import UnitIcon from "../../../assets/svgs/UnitIcon";
import CartIcon from "../../../assets/svgs/CartIcon";
import GroupIcon from "../../../assets/svgs/GroupIcon";
import BagIcon from "../../../assets/svgs/BagIcon";
import RankIcon from "../../../assets/svgs/RankIcon";
const { Sider } = Layout;

interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: string;
  path: string;
}

interface IProps {
  sidebarVisible: boolean;
  setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarMenu: React.FC<IProps> = ({
  sidebarVisible,
  setSidebarVisible,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    {
      key: "home",
      icon: <HomeIcon />,
      label: "Trang chủ",
      path: "/",
    },
    {
      key: "categories",
      icon: <UnitIcon />,
      label: "Quản lý danh mục",
      path: "/categories",
    },
    {
      key: "units",
      icon: <CartIcon />,
      label: "Quản lý đơn vị",
      path: "/units",
    },
    {
      key: "users",
      icon: <GroupIcon />,
      label: "Quản lý người dùng",
      path: "/users",
    },
    {
      key: "applications",
      icon: <BagIcon />,
      label: "Quản lý ứng dụng",
      path: "/applications",
    },
    {
      key: "rankings",
      icon: <RankIcon />,
      label: "Bảng xếp hạng",
      path: "/rankings",
    },
  ];

  const getSelectedKey = () => {
    const path = location.pathname;
    const item = menuItems.find((item) => path === item.path);
    return item ? [item.key] : ["home"];
  };

  const handleMenuClick = (item: MenuItem) => {
    navigate(item.path);
    setSidebarVisible(false);
  };

  const renderMenu = () => (
    <Menu
      theme="light"
      mode="inline"
      selectedKeys={getSelectedKey()}
      className="mystore-menu"
    >
      {menuItems.map((item) => (
        <Menu.Item
          key={item.key}
          icon={item.icon}
          onClick={() => handleMenuClick(item)}
          className="menu-item-sidebar"
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <div className="mystore-mobile-menu">
        <Drawer
          placement="left"
          closable={false}
          onClose={() => setSidebarVisible(false)}
          open={sidebarVisible}
          width={310}
          bodyStyle={{ padding: 0 }}
          maskClosable={true}
        >
          <div className="mystore-logo-container">
            <div className="mystore-logo">
              <img src={logo} alt="MyStore" className="mystore-logo-img" />
            </div>
          </div>
          {renderMenu()}
          <div className="mystore-footer-sidebar-mobile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M12 7.5H11C8.64298 7.5 7.46447 7.5 6.73223 8.23223C6 8.96447 6 10.143 6 12.5V17.5C6 19.857 6 21.0355 6.73223 21.7678C7.46447 22.5 8.64298 22.5 11 22.5H12"
                stroke="#EE0033"
                strokeWidth="1.5"
              />
              <path
                d="M12 9.4764C12 7.18259 12 6.03569 12.7073 5.4087C13.4145 4.78171 14.4955 4.97026 16.6576 5.34736L18.9864 5.75354C21.3809 6.17118 22.5781 6.37999 23.2891 7.25826C24 8.13652 24 9.40672 24 11.9471V18.0529C24 20.5933 24 21.8635 23.2891 22.7417C22.5781 23.62 21.3809 23.8288 18.9864 24.2465L16.6576 24.6526C14.4955 25.0297 13.4145 25.2183 12.7073 24.5913C12 23.9643 12 22.8174 12 20.5236V9.4764Z"
                stroke="#EE0033"
                strokeWidth="1.5"
              />
              <path
                d="M15 14V16"
                stroke="#EE0033"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p>Thoát tài khoản</p>
          </div>
        </Drawer>
      </div>

      <div className="mystore-desktop-menu">
        <Sider width={310} className="mystore-sidebar" trigger={null}>
          <div className="mystore-logo-container">
            <div className="mystore-logo">
              <img src={logo} alt="MyStore" className="mystore-logo-img" />
            </div>
          </div>
          {renderMenu()}
          <div className="mystore-footer-sidebar"></div>
        </Sider>
      </div>
    </>
  );
};

export default SidebarMenu;
