import styles from "./ModalLayout.module.scss";
import classNames from "classnames/bind";
import closeBtn from "../../assets/close.png";

const cx = classNames.bind(styles);

export const ModalLayout = ({ children, onClose }) => {
  const handleClosedClick = () => {
    onClose();
  };

  return (
    <div className={cx("container")}>
      <div className={cx("modal-box")}>
        <div className={cx("icon-box")}>
          <button onClick={handleClosedClick}>
            <img className={cx("close-icon")} src={closeBtn} alt="close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
