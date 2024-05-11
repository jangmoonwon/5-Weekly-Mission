import styles from "./EditFolderModal.module.scss";
import classNames from "classnames/bind";
import { ModalLayout } from "../../../sharing/ui-modal-layout/ModalLayout";

const cx = classNames.bind(styles);

export const EditFolderModal = ({ onClose }) => {
  return (
    <ModalLayout onClose={onClose}>
      <div className={cx("container")}>
        <h1 className={cx("modal-title")}>폴더 이름 변경</h1>
        <div className={cx("button-box")}>
          <input className={cx("edit-input")} placeholder="내용 입력" />
          <button className={cx("edit-btn")}>변경하기</button>
        </div>
      </div>
    </ModalLayout>
  );
};
