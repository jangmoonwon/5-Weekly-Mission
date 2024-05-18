import { ReactNode } from "react";
import styles from "./LoginLayout.module.scss";
import classNames from "classnames/bind";

interface LoginLayoutProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const LoginLayout = ({ children }: LoginLayoutProps) => {
  return <div className={cx("container")}>{children}</div>;
};
