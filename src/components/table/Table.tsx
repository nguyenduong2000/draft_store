"use client";

import type React from "react";
import { Table, Select, Pagination } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./table.css";

const { Option } = Select;

interface AppData {
  key: string;
  stt: number;
  appName: string;
  appIcon: string;
  unit: string;
  category: string;
  certExpiration: string;
  status: "Đang theo dõi" | "Tạm dừng" | "Hết hạn";
}

interface AppMonitoringTableProps {
  data: AppData[];
  columns: ColumnsType<AppData>;
  title?: string;
  currentPage: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

const AppMonitoringTable: React.FC<AppMonitoringTableProps> = ({
  data,
  columns,
  title = "Ứng dụng đang theo dõi",
  currentPage,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
}) => {
  return (
    <div className="mystore-app-monitoring-container">
      <h2 className="mystore-app-monitoring-title">{title}</h2>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "mystore-even-row" : "mystore-odd-row"
        }
        className="mystore-app-monitoring-table"
      />
      <div className="mystore-app-monitoring-pagination">
        <div className="mystore-items-per-page">
          <span>Items per page:</span>
          <Select
            value={pageSize}
            onChange={onPageSizeChange}
            className="mystore-select-item-per-page"
            dropdownMatchSelectWidth={false}
            size="small"
          >
            <Option value={5}>5</Option>
            <Option value={10}>10</Option>
            <Option value={20}>20</Option>
          </Select>
          <span className="mystore-page-info">{`${
            (currentPage - 1) * pageSize + 1
          }-${Math.min(currentPage * pageSize, total)} of ${total}`}</span>
        </div>
        <div className="mystore-pagination-controls">
          <button
            className="mystore-pagination-nav-button"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.726 12.0001L12.666 11.0601L9.61268 8.00012L12.666 4.94012L11.726 4.00012L7.72602 8.00012L11.726 12.0001Z"
                fill="currentColor"
              />
              <path
                d="M7.33295 12.0001L8.27295 11.0601L5.21962 8.00012L8.27295 4.94012L7.33295 4.00012L3.33295 8.00012L7.33295 12.0001Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <Pagination
            className="mystore-custom-pagination"
            current={currentPage}
            pageSize={pageSize}
            total={total}
            onChange={onPageChange}
            showSizeChanger={false}
            showQuickJumper={false}
            itemRender={(page, type, originalElement) => {
              if (type === "prev")
                return (
                  <button className="mystore-pagination-nav-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.0595 12.0001L10.9995 11.0601L7.94618 8.00012L10.9995 4.94012L10.0595 4.00012L6.05951 8.00012L10.0595 12.0001Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                );
              if (type === "next")
                return (
                  <button className="mystore-pagination-nav-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.93951 4.00012L5.99951 4.94012L9.05285 8.00012L5.99951 11.0601L6.93951 12.0001L10.9395 8.00012L6.93951 4.00012Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                );
              if (type === "jump-prev" || type === "jump-next")
                return (
                  <button className="mystore-pagination-nav-button">
                    &hellip;
                  </button>
                );
              return originalElement;
            }}
          />

          <button
            className="mystore-pagination-nav-button"
            onClick={() => onPageChange(Math.ceil(total / pageSize))}
            disabled={currentPage === Math.ceil(total / pageSize)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4.27301 4.00012L3.33301 4.94012L6.38634 8.00012L3.33301 11.0601L4.27301 12.0001L8.27301 8.00012L4.27301 4.00012Z"
                fill="currentColor"
              />
              <path
                d="M8.66607 4.00012L7.72607 4.94012L10.7794 8.00012L7.72607 11.0601L8.66607 12.0001L12.6661 8.00012L8.66607 4.00012Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppMonitoringTable;
