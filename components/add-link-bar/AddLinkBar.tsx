import styles from "./AddLinkBar.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import AddLink from "@/public/link.svg";

const cx = classNames.bind(styles);

export default function AddLinkBar() {
  return (
    <div className={cx("container")}>
      <div className={cx("item")}>
        <form className={cx("form")}>
          <Image src={AddLink} alt="add=link" width={20} height={20} />
          <input className={cx("input")} placeholder="링크를 추가해 보세요." />
          <button className={cx("button")}>추가하기</button>
        </form>
      </div>
    </div>
  );
}
