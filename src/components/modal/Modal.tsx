import { Modal, ModalProps } from "antd";
import { ReactNode } from "react";
import "./styles.css";

export interface IModalProps extends ModalProps {
  children: ReactNode;
}

export const ModalComponent = ({children, ...rest}: IModalProps) => {

  return (
    <Modal
      className="modal-custom"
      {...rest}
      footer={[
        <div className="footer-modal">
          <button className="btn-save">Lưu</button>
          <button className="btn-cancel">Hủy</button>
        </div>,
      ]}
    >
      {children}
    </Modal>
  );
};
