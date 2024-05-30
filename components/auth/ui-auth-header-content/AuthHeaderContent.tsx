import styles from "./AuthHeaderContent.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ContentProps = {
  children: React.ReactNode;
};

export const AuthHeaderContent = ({ children }: ContentProps) => {
  return <div className={cx("content")}>{children}</div>;
};
