import styles from "./LinkDeleteModal.module.scss";
import classNames from "classnames/bind";
import { ModalLayout } from "../../../sharing/ui-modal-layout/ModalLayout";

const cx = classNames.bind(styles);

export const LinkDeleteModal = ({ item, onClose }) => {
  return (
    <ModalLayout onClose={onClose}>
      <div className={cx("container")}>
        <div className={cx("text-box")}>
          <h1 className={cx("modal-title")}>링크 삭제</h1>
          <p>{item}</p>
        </div>
          <button className={cx("delete-btn")}>삭제하기</button>
      </div>
    </ModalLayout>
  );
};
