import styles from "./SearchBar.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import searchIcon from "@/public/search.svg";

const cx = classNames.bind(styles);

export default function SearchBar() {
  return (
    <div className={cx("container")}>
      <Image src={searchIcon} alt="search" width={16} height={16} />
      <input
        className={cx("input")}
        type="text"
        placeholder="링크를 검색해 보세요."
      />
    </div>
  );
}
