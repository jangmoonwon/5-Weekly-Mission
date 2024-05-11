import styles from "./DeleteFolderModal.module.scss";
import classNames from "classnames/bind";
import { ModalLayout } from "../../../sharing/ui-modal-layout/ModalLayout";

const cx = classNames.bind(styles);

export const DeleteFolderModal = ({ item, onClose }) => {
  return (
    <ModalLayout onClose={onClose}>
      <div className={cx("container")}>
        <div className={cx("text-box")}>
          <h1 className={cx("modal-title")}>폴더 삭제</h1>
          <p>{item}</p>
        </div>
        <button className={cx("delete-btn")}>삭제하기</button>
      </div>
    </ModalLayout>
  );
};
