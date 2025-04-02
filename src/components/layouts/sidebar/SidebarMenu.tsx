// Menu.tsx
import React, { useState } from 'react';
import { Layout, Menu, Drawer } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../../../assets/images/logo.png"

import { 
  HomeOutlined, 
  UnorderedListOutlined, 
  BankOutlined, 
  UserOutlined, 
  AppstoreOutlined, 
  TrophyOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import './sidebarMenu.css';
const { Sider } = Layout;

interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: string;
  path: string;
}

interface IProps{
  sidebarVisible: boolean;
  setSidebarVisible:React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarMenu: React.FC<IProps> = ({sidebarVisible,setSidebarVisible}) => {
  const location = useLocation();
  const navigate = useNavigate();


  const menuItems: MenuItem[] = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Trang chủ',
      path: '/'
    },
    {
      key: 'categories',
      icon: <UnorderedListOutlined />,
      label: 'Quản lý danh mục',
      path: '/categories'
    },
    {
      key: 'units',
      icon: <BankOutlined />,
      label: 'Quản lý đơn vị',
      path: '/units'
    },
    {
      key: 'users',
      icon: <UserOutlined />,
      label: 'Quản lý người dùng',
      path: '/users'
    },
    {
      key: 'applications',
      icon: <AppstoreOutlined />,
      label: 'Quản lý ứng dụng',
      path: '/applications'
    },
    {
      key: 'rankings',
      icon: <TrophyOutlined />,
      label: 'Bảng xếp hạng',
      path: '/rankings'
    }
  ];

  const getSelectedKey = () => {
    const path = location.pathname;
    const item = menuItems.find(item => path === item.path);
    return item ? [item.key] : ['home'];
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
      {menuItems.map(item => (
        <Menu.Item 
          key={item.key} 
          icon={item.icon}
          onClick={() => handleMenuClick(item)} 
          className="menu-item"
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <div className="mobile-menu">
        <Drawer
          placement="left"
          closable={false}
          onClose={() => setSidebarVisible(false)}
          open={sidebarVisible}
          width={310}
          bodyStyle={{ padding: 0 }}
          maskClosable={true}
        >
          <div className="logo-container">
            <div className="logo">
            <img src={logo} alt="MyStore" className="mystore-logo" />
            </div>
          </div>
          {renderMenu()}
        </Drawer>
      </div>

      <div className="desktop-menu">
        <Sider
          width={310}
          className="sidebar"
          trigger={null}
        >
          <div className="logo-container">
            <div className="logo">
              <img src={logo} alt="MyStore" className="mystore-logo" />
            </div>
          </div>
          {renderMenu()}
        </Sider>
      </div>
    </>
  );
};

export default SidebarMenu;