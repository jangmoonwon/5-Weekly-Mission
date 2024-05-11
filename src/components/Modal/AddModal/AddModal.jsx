import styles from "./AddFolderModal.module.scss";
import classNames from "classnames/bind";
import { ModalLayout } from "../../../sharing/ui-modal-layout/ModalLayout";

const cx = classNames.bind(styles);

export const AddFolderModal = ({ onClose }) => {
  return (
    <ModalLayout onClose={onClose}>
      <div className={cx("container")}>
        <h1 className={cx("modal-title")}>폴더 추가</h1>
        <div className={cx("button-box")}>
          <input className={cx("add-input")} placeholder="내용 입력" />
          <button className={cx("add-btn")}>추가하기</button>
        </div>
      </div>
    </ModalLayout>
  );
};
