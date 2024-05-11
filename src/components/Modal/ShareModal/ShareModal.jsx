import styles from "./ShareModal.module.scss";
import classNames from "classnames/bind";
// import closeBtn from "../../../assets/close.png";
// import { useState } from "react";
import shareKakaoIcon from "../../../assets/shareKakao.svg";
import shareFacebookIcon from "../../../assets/shareFacebook.svg";
import shareLinkIcon from "../../../assets/shareLink.svg";
import { ModalLayout } from "../../../sharing/ui-modal-layout/ModalLayout";

const cx = classNames.bind(styles);

export const ShareModal = ({ onClose }) => {
  return (
    <ModalLayout onClose={onClose}>
      <div className={cx("items")}>
        <div className={cx("text-box")}>
          <h1 className={cx("modal-title")}>폴더 공유</h1>
          <p>TEST</p>
        </div>
        <div className={cx("btn-box")}>
          <button className={cx("share-box")}>
            <img src={shareKakaoIcon} alt="kakao" />
            <p className={cx("share-text")}>카카오톡</p>
          </button>
          <button className={cx("share-box")}>
            <img src={shareFacebookIcon} alt="facebook" />
            <p className={cx("share-text")}>페이스북</p>
          </button>
          <button className={cx("share-box")}>
            <img src={shareLinkIcon} alt="copy-link" />
            <p className={cx("share-text")}>링크 복사</p>
          </button>
        </div>
      </div>
    </ModalLayout>
  );
};
