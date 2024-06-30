import styles from "./Loading.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Loading() {
  return (
    <div className={cx("container")}>
      <h1 className={cx("text")}>Loading...</h1>
    </div>
  );
}
