import { ReactNode } from "react";
import styles from "./SharedLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface SharedLayout {
  folderInfo: ReactNode;
  seachBar: ReactNode;
  cardList: ReactNode;
}

export default function SharedLayout({
  folderInfo,
  seachBar,
  cardList,
}: SharedLayout) {
  return (
    <div className={cx("container")}>
      {folderInfo}
      <div className={cx("item")}>
        {seachBar}
        {cardList}
      </div>
    </div>
  );
}
