"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { CloseCircleOutlined } from "@ant-design/icons"
import type { ColumnsType } from "antd/es/table"
import AppMonitoringTable from "../../components/table/Table"

interface AppData {
  key: string
  stt: number
  appName: string
  appIcon: string
  unit: string
  category: string
  certExpiration: string
  status: "Đang theo dõi" | "Tạm dừng" | "Hết hạn"
}

const AppMonitoringExample: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [total, setTotal] = useState(36)
  const [data, setData] = useState<AppData[]>([])
  const [loading, setLoading] = useState(false)

  // Cấu hình columns để truyền vào component
  const columns: ColumnsType<AppData> = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      width: 70,
      align: "center",
    },
    {
      title: "Tên ứng dụng",
      dataIndex: "appName",
      key: "appName",
      render: (_, record) => (
        <div className="app-name-cell">
          <div className="app-icon">
            <img src={record.appIcon || "/placeholder.svg"} alt={record.appName} width={40} height={40} />
          </div>
          <span>{record.appName}</span>
        </div>
      ),
    },
    {
      title: "Đơn vị",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Thời hạn cert",
      dataIndex: "certExpiration",
      key: "certExpiration",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span className="status-tag" style={{ color: status === "Đang theo dõi" ? "#34C759" : "#FF9500" }}>
          {status}
        </span>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: () => (
        <button className="action-button">
          <CloseCircleOutlined />
          <span>Bỏ theo dõi</span>
        </button>
      ),
    },
  ]

  // Hàm xử lý khi thay đổi trang - được gọi từ bên ngoài component
  const handlePageChange = (page: number) => {
    console.log("Changing to page:", page)
    setCurrentPage(page)
    fetchData(page, pageSize)
  }

  // Hàm xử lý khi thay đổi số lượng item trên trang - được gọi từ bên ngoài component
  const handlePageSizeChange = (size: number) => {
    console.log("Changing page size to:", size)
    setPageSize(size)
    setCurrentPage(1) // Reset về trang 1 khi thay đổi page size
    fetchData(1, size)
  }

  // Giả lập hàm gọi API
  const fetchData = (page: number, size: number) => {
    setLoading(true)
    console.log(`Calling API with page=${page}, pageSize=${size}`)

    // Giả lập gọi API
    setTimeout(() => {
      // Tạo dữ liệu mẫu dựa trên trang và kích thước trang
      const mockData: AppData[] = []
      const startIndex = (page - 1) * size

      for (let i = 0; i < size; i++) {
        const index = startIndex + i
        if (index < total) {
          mockData.push({
            key: `${index + 1}`,
            stt: index + 1,
            appName: "TV360",
            appIcon: "/placeholder.svg?height=40&width=40",
            unit: "CNTT",
            category: "Danh mục",
            certExpiration: "20-02-2026",
            status: "Đang theo dõi",
          })
        }
      }

      setData(mockData)
      setLoading(false)
    }, 500)
  }

  // Gọi API khi component mount hoặc khi các tham số thay đổi
  useEffect(() => {
    fetchData(currentPage, pageSize)
  }, [])

  return (
    <AppMonitoringTable
      data={data}
      columns={columns}
      currentPage={currentPage}
      pageSize={pageSize}
      total={total}
      onPageChange={handlePageChange}
      onPageSizeChange={handlePageSizeChange}
    />
  )
}

export default AppMonitoringExample

