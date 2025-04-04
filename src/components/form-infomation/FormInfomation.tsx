"use client";

import type React from "react";
import { useState } from "react";
import { Form, Input, Row, Col } from "antd";
import "./formInfomation.css";

const PersonalInfoForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string>(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201597880669-nLPtg9e0MtKGQnzIm8mx2kyyfU6TVz.png"
  );

  // Initial form values
  const formValues = {
    fullName: "Nguyễn Văn A",
    department: "CNTT",
    username: "441208",
    email: "info324@viettel.com.vn",
    phone: "096564754",
    privateKey: "AbCd1234@#$%",
  };

  const handleCopyPrivateKey = () => {
    navigator.clipboard
      .writeText(formValues.privateKey)
      .then(() => console.log("Copied to clipboard"))
      .catch(() => console.error("Failed to copy"));
  };

  const handleDeleteAvatar = () => {
    console.log("Delete avatar clicked");
  };

  return (
    <div className="mystore-personal-info-container">
      <h1 className="mystore-form-title">Thông tin cá nhân</h1>

      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <div className="mystore-form-section">
            <Form
              layout="horizontal"
              labelCol={{ xs: 24, sm: 8, md: 8, lg: 8, xl: 8 }}
              wrapperCol={{ xs: 24, sm: 16, md: 16, lg: 16, xl: 16 }}
              className="mystore-form"
            >
              <Form.Item className="mystore-form-info-label" label="Họ tên">
                <Input
                  className="mystore-form-input-readonly"
                  value={formValues.fullName}
                  readOnly
                />
              </Form.Item>

              <Form.Item className="mystore-form-info-label" label="Đơn vị">
                <Input
                  className="mystore-form-input-readonly"
                  value={formValues.department}
                  readOnly
                />
              </Form.Item>

              <Form.Item className="mystore-form-info-label" label="Tên đăng nhập">
                <Input
                  className="mystore-form-input-readonly"
                  value={formValues.username}
                  readOnly
                />
              </Form.Item>

              <Form.Item className="mystore-form-info-label" label="Email">
                <Input
                  className="mystore-form-input-readonly"
                  value={formValues.email}
                  readOnly
                />
              </Form.Item>

              <Form.Item className="mystore-form-info-label" label="Số điện thoại">
                <Input
                  className="mystore-form-input-readonly"
                  value={formValues.phone}
                  readOnly
                />
              </Form.Item>

              <Form.Item className="mystore-form-info-label" label="Mã truy cập (Private key)">
                <Input
                  className="mystore-form-private-key"
                  value={passwordVisible ? formValues.privateKey : "********"}
                  readOnly
                  suffix={
                    <div className="mystore-password-actions">
                      <span
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        className="mystore-icon-action"
                      >
                        {passwordVisible ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5.01991 14.6365C4.33997 13.7532 4 13.3115 4 12C4 10.6885 4.33997 10.2468 5.01991 9.36344C6.37757 7.59962 8.65449 5.59998 12 5.59998C15.3455 5.59998 17.6224 7.59962 18.9801 9.36344C19.66 10.2468 20 10.6885 20 12C20 13.3115 19.66 13.7532 18.9801 14.6365C17.6224 16.4003 15.3455 18.4 12 18.4C8.65449 18.4 6.37757 16.4003 5.01991 14.6365Z"
                              stroke="#5B6065"
                              stroke-width="1.5"
                            />
                            <path
                              d="M14.4001 12C14.4001 13.3255 13.3256 14.4 12.0001 14.4C10.6746 14.4 9.6001 13.3255 9.6001 12C9.6001 10.6745 10.6746 9.59998 12.0001 9.59998C13.3256 9.59998 14.4001 10.6745 14.4001 12Z"
                              stroke="#5B6065"
                              stroke-width="1.5"
                            />
                            <path
                              d="M6 6L18 18"
                              stroke="#5B6065"
                              stroke-width="1.8"
                              stroke-linecap="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5.01991 14.6365C4.33997 13.7532 4 13.3115 4 12C4 10.6885 4.33997 10.2468 5.01991 9.36344C6.37757 7.59962 8.65449 5.59998 12 5.59998C15.3455 5.59998 17.6224 7.59962 18.9801 9.36344C19.66 10.2468 20 10.6885 20 12C20 13.3115 19.66 13.7532 18.9801 14.6365C17.6224 16.4003 15.3455 18.4 12 18.4C8.65449 18.4 6.37757 16.4003 5.01991 14.6365Z"
                              stroke="#5B6065"
                              stroke-width="1.5"
                            />
                            <path
                              d="M14.4001 12C14.4001 13.3255 13.3256 14.4 12.0001 14.4C10.6746 14.4 9.6001 13.3255 9.6001 12C9.6001 10.6745 10.6746 9.59998 12.0001 9.59998C13.3256 9.59998 14.4001 10.6745 14.4001 12Z"
                              stroke="#5B6065"
                              stroke-width="1.5"
                            />
                          </svg>
                        )}
                      </span>
                      <span
                        onClick={handleCopyPrivateKey}
                        className="mystore-icon-action"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M15.1998 5.59998C16.9398 5.60966 17.8822 5.68682 18.4969 6.30153C19.1998 7.00447 19.1998 8.13584 19.1998 10.3986V15.1986C19.1998 17.4613 19.1998 18.5927 18.4969 19.2956C17.7939 19.9986 16.6625 19.9986 14.3998 19.9986H9.5998C7.33706 19.9986 6.20569 19.9986 5.50275 19.2956C4.7998 18.5927 4.7998 17.4613 4.7998 15.1986V10.3986C4.7998 8.13584 4.7998 7.00447 5.50275 6.30153C6.11746 5.68682 7.05978 5.60966 8.7998 5.59998"
                            stroke="#5B6065"
                            stroke-width="1.5"
                          />
                          <path
                            d="M9.6001 13.12L10.9715 14.4L14.4001 11.2"
                            stroke="#5B6065"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.7998 5.2C8.7998 4.53726 9.33706 4 9.9998 4H13.9998C14.6625 4 15.1998 4.53726 15.1998 5.2V6C15.1998 6.66274 14.6625 7.2 13.9998 7.2H9.9998C9.33706 7.2 8.7998 6.66274 8.7998 6V5.2Z"
                            stroke="#5B6065"
                            stroke-width="1.5"
                          />
                        </svg>
                      </span>
                    </div>
                  }
                />
              </Form.Item>
            </Form>
          </div>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="mystore-avatar-section">
            <div className="mystore-avatar-container">
              <img
                src={avatarUrl || "/placeholder.svg"}
                alt="Avatar"
                className="mystore-avatar-image"
              />
            </div>
            <button
              onClick={handleDeleteAvatar}
              className="mystore-delete-button"
            >
              Xóa avatar
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PersonalInfoForm;
