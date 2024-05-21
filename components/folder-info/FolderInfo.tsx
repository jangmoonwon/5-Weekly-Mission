import styles from "./FolderInfo.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

interface FolderInfoProps {
  folderName: string;
  ownerName: string;
  profileImage: string;
}

const cx = classNames.bind(styles);

export default function FolderInfo({
  folderName,
  ownerName,
  profileImage,
}: FolderInfoProps) {
  return (
    <div className={cx("container")}>
      <Image src={profileImage} width={60} height={60} alt="profileImage" />
      <span className={cx("owner")}>{ownerName}</span>
      <h2 className={cx("folder-name")}>{folderName}</h2>
    </div>
  );
}
