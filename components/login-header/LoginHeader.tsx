import styles from "./LoginHeader.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

const cx = classNames.bind(styles);

interface LoginHeaderProps {
  href: string;
  message: string;
  linkName: string;
}

export default function LoginHeader({
  href,
  message,
  linkName,
}: LoginHeaderProps) {
  return (
    <header className={cx("header-container")}>
      <Link href="/">
        <Image src={Logo} alt="Logo" width={210} height={38} priority />
      </Link>
      <div className={cx("header-content")}>
        <span className={cx("header-message")}>{message}</span>
        <Link href={href} className={cx("header-link")}>
          {linkName}
        </Link>
      </div>
    </header>
  );
}
