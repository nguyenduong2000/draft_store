"use client"

import { useState } from "react"
import "./notifications.css"

interface Notification {
  id: string
  appName: string
  description: string
  timestamp: string
  isRead: boolean
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      appName: "Tên ứng dụng",
      description: "Đã có phiên bản [version bản release] mới nhất. [Mô tả phiên bản]",
      timestamp: "1 giờ trước",
      isRead: false,
    },
    {
      id: "2",
      appName: "Tên ứng dụng",
      description: "Đã có phiên bản [version bản release] mới nhất. [Mô tả phiên bản]",
      timestamp: "1 giờ trước",
      isRead: true,
    },
    {
      id: "3",
      appName: "Tên ứng dụng",
      description: "Đã có phiên bản [version bản release] mới nhất. [Mô tả phiên bản]",
      timestamp: "24/05/2025",
      isRead: true,
    },
  ])

  const dismissNotification = (id: string) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, isRead: true } : notification)),
    )
  }

  return (
    <div className="notification-container">
      <div className="notification-header">
        <h2>Thông báo</h2>
      </div>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item" onClick={() => markAsRead(notification.id)}>
            <div className={`notification-content ${notification.isRead ? 'notification-readed' :''}`}>
              <div className="notification-text">
                <p className="notification-title">Ứng dụng [{notification.appName}] có cập nhật mới</p>
                <p className="notification-description">{notification.description}</p>
                <p className="notification-time">{notification.timestamp}</p>
              </div>
              {!notification.isRead && <div className="unread-indicator"></div>}
              {notification.id === "3" && (
                <button
                  className="dismiss-button"
                  onClick={(e) => {
                    e.stopPropagation()
                    dismissNotification(notification.id)
                  }}
                >
                  ×
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

