import { ReactNode } from "react";
import styles from "./CardLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function CardLayout({ children }: { children: ReactNode }) {
  return <div className={cx("container")}>{children}</div>;
}
