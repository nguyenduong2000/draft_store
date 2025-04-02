import React, { useState, useRef } from "react";
import { Layout, Input, Dropdown, Menu, Avatar, Badge, List } from "antd";
import { BellOutlined, UserOutlined, SearchOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./header.css";
import searchIcon from "../../../assets/svgs/search.svg"
import bellIcon from "../../../assets/svgs/bell.svg"
import chevrondownIcon from "../../../assets/svgs/chevrondown.svg"
import {Notifications} from "../notifications";

const { Header } = Layout;

interface IProps{
  sidebarVisible: boolean;
  setSidebarVisible:React.Dispatch<React.SetStateAction<boolean>>
}

const AppHeader: React.FC<IProps> = ({setSidebarVisible,sidebarVisible}) => {
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
          resolve([
            "Ứng dụng 1",
            "Ứng dụng 2",
            "Ứng dụng 3",
            "Ứng dụng 4",
          ]);
        }, 500);
      });
      setSearchResults(results);
    } else {
      setShowDropdown(false);
      setSearchResults([]);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
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
    <div className="dropdown-menu">
    <ul>
      <li>
        <div className="menu-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="14" x="3" y="5" rx="2" />
            <path d="M3 7h18" />
            <path d="M7 12h2" />
            <path d="M7 15h6" />
            <circle cx="15" cy="13" r="2" />
          </svg>
        </div>
        <span>Thông tin tài khoản</span>
      </li>
      <li >
        <div className="menu-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
            <path d="M7 12h14" />
            <path d="M18 8l4 4-4 4" />
          </svg>
        </div>
        <span>Đăng xuất</span>
      </li>
    </ul>
  </div>
  );

  return (
    <Header className="custom-header">
      <div className="search-container" ref={searchRef}>
        <div className="search-box">
          <img src={searchIcon} alt="search icon" className="search-icon" />
          <Input
            className="mystore-search-input"
            placeholder="Tìm kiếm ứng dụng"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => searchQuery.length > 0 && setShowDropdown(true)}
          />
        </div>
        {showDropdown && searchResults.length > 0 && (
          <List
            className="search-dropdown"
            dataSource={searchResults}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        )}
      </div>
      <div className="header-icons">
        <Dropdown overlay={<Notifications/>} trigger={["click"]} placement="bottom">
        <div className="around-bell-icon">
            <img src={bellIcon} className="icon" alt="bell"/>
        </div>
        </Dropdown>
        <Dropdown overlay={userMenu} trigger={["click"]}  open={showDropdownAvatar}  onOpenChange={handleVisibleChange} placement="bottom">
          <div className="avatar-container">
            <Avatar size="large" icon={<UserOutlined />} className="custom-ant-avatar"/>
            <span className="username">Nguyễn Văn A</span>
          <img src={chevrondownIcon} alt="down" className={`cheveron-down-icon ${showDropdownAvatar ? 'show-dropdown':'hidden-dropdown'}`}/>
          </div>
        </Dropdown>
        <div className="mobile-menu-trigger">
        <svg  onClick={toggleDrawer} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mobile-menu-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </div>
      </div>
    </Header>
  );
};

export default AppHeader;
