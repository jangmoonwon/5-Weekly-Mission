import { ReactNode } from "react";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function CardList({ children }: { children: ReactNode }) {
  return <div className={cx("container")}>{children}</div>;
}
