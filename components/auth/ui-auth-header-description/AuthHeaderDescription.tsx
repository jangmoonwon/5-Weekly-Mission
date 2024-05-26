import styles from "./AuthHeaderDescription.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type DescriptionProps = {
  children: React.ReactNode;
};

export const AuthHeaderDescription = ({ children }: DescriptionProps) => {
  return <div className={cx("description")}>{children}</div>;
};
