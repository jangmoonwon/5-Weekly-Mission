import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Add from "@/public/add.svg";

const cx = classNames.bind(styles);

export default function AddFolderButton() {
  return (
    <button className={cx("container")}>
      <span>폴더 추가</span>
      <Image src={Add} alt="add" width={16} height={16} />
    </button>
  );
}
