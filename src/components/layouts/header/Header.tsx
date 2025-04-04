import React, { useState, useRef } from "react";
import { Layout, Input, Dropdown, Menu, Avatar, Badge, List } from "antd";
import {
  BellOutlined,
  UserOutlined,
  SearchOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import "./header.css";
import searchIcon from "../../../assets/svgs/search.svg";
import bellIcon from "../../../assets/svgs/bell.svg";
import chevrondownIcon from "../../../assets/svgs/chevrondown.svg";
import { Notifications } from "../notifications";

const { Header } = Layout;

interface IProps {
  sidebarVisible: boolean;
  setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppHeader: React.FC<IProps> = ({ setSidebarVisible, sidebarVisible }) => {
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showDropdownAvatar, setShowDropdownAvatar] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (value: string) => {
    setSearchQuery(value);
    if (value.length > 0) {
      setShowDropdown(true);
      // Giả lập API call
      const results = await new Promise<string[]>((resolve) => {
        setTimeout(() => {
          resolve(["Ứng dụng 1", "Ứng dụng 2", "Ứng dụng 3", "Ứng dụng 4"]);
        }, 500);
      });
      setSearchResults(results);
    } else {
      setShowDropdown(false);
      setSearchResults([]);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  const handleVisibleChange = (visible: boolean) => {
    setShowDropdownAvatar(visible);
  };

  const toggleDrawer = () => {
    setSidebarVisible(!sidebarVisible);
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const userMenu = (
    <div className="mystore-dropdown-menu">
      <ul>
        <li>
          <div className="mystore-menu-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <circle cx="12" cy="12" r="2" stroke="black" strokeWidth="1.5" />
              <path
                d="M16 18C16 19.1046 16 20 12 20C8 20 8 19.1046 8 18C8 16.8954 9.79086 16 12 16C14.2091 16 16 16.8954 16 18Z"
                stroke="black"
                strokeWidth="1.5"
              />
              <path
                d="M5 15C5 11.2288 5 9.34315 6.17157 8.17157C7.34315 7 9.22876 7 13 7H17C20.7712 7 22.6569 7 23.8284 8.17157C25 9.34315 25 11.2288 25 15C25 18.7712 25 20.6569 23.8284 21.8284C22.6569 23 20.7712 23 17 23H13C9.22876 23 7.34315 23 6.17157 21.8284C5 20.6569 5 18.7712 5 15Z"
                stroke="black"
                strokeWidth="1.5"
              />
              <path
                d="M22 15H18"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M22 12H17"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M22 18H19"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="mystore-mystore-menu-item">Thông tin tài khoản</span>
        </li>
        <li>
          <div className="mystore-menu-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M11.002 10C11.0141 7.82497 11.1105 6.64706 11.8789 5.87868C12.7576 5 14.1718 5 17.0002 5H18.0002C20.8286 5 22.2429 5 23.1215 5.87868C24.0002 6.75736 24.0002 8.17157 24.0002 11V19C24.0002 21.8284 24.0002 23.2426 23.1215 24.1213C22.2429 25 20.8286 25 18.0002 25H17.0002C14.1718 25 12.7576 25 11.8789 24.1213C11.1105 23.3529 11.0141 22.175 11.002 20"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M11 22.5C8.64298 22.5 7.46447 22.5 6.73223 21.7678C6 21.0355 6 19.857 6 17.5V12.5C6 10.143 6 8.96447 6.73223 8.23223C7.46447 7.5 8.64298 7.5 11 7.5"
                stroke="black"
                strokeWidth="1.5"
              />
              <path
                d="M18 15L9 15M9 15L11 17M9 15L11 13"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="mystore-mystore-menu-item">Đăng xuất</span>
        </li>
      </ul>
    </div>
  );

  return (
    <Header className="mystore-custom-header">
      <div className="mystore-search-container" ref={searchRef}>
        <div className="mystore-search-box">
          <img src={searchIcon} alt="search icon" className="mystore-search-icon" />
          <Input
            className="mystore-mystore-search-input"
            placeholder="Tìm kiếm ứng dụng"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => searchQuery.length > 0 && setShowDropdown(true)}
          />
        </div>
        {showDropdown && searchResults.length > 0 && (
          <List
            className="mystore-search-dropdown"
            dataSource={searchResults}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        )}
      </div>
      <div className="mystore-header-icons">
        <Dropdown
          overlay={<Notifications />}
          trigger={["click"]}
          placement="bottom"
        >
          <div className="mystore-around-bell-icon">
            <img src={bellIcon} className="mystore-icon" alt="bell" />
          </div>
        </Dropdown>
        <Dropdown
          overlay={userMenu}
          trigger={["click"]}
          open={showDropdownAvatar}
          onOpenChange={handleVisibleChange}
          placement="bottom"
        >
          <div className="mystore-header-avatar-container">
            <Avatar
              size="large"
              icon={<UserOutlined />}
              className="mystore-custom-ant-avatar"
            />
            <span className="mystore-username">Nguyễn Văn A</span>
            <img
              src={chevrondownIcon}
              alt="down"
              className={`mystore-cheveron-down-icon ${
                showDropdownAvatar ? "mystore-show-dropdown" : "mystore-hidden-dropdown"
              }`}
            />
          </div>
        </Dropdown>
        <div className="mystore-mobile-menu-trigger">
          <svg
            onClick={toggleDrawer}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mystore-mobile-menu-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
            />
          </svg>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
