import Image from "next/image";
import styles from "./FolderButtons.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type FolderButtonsProps = {
  text: string;
  src: string;
  alt: string;
  onClick: () => void;
};

export default function FolderButtons({
  text,
  src,
  alt,
  onClick,
}: FolderButtonsProps) {
  return (
    <button className={cx("container")} onClick={onClick}>
      <Image src={src} alt={alt} onClick={onClick} width={18} height={18} />
      <span className={cx("text")}>{text}</span>
    </button>
  );
}
