import Image from "next/image";
import Link from "next/link";
import styles from "./SocialBox.module.scss";
import classNames from "classnames/bind";
import Googlelogin from "@/public/google-login.svg";
import Kakaologin from "@/public/kakao-login.svg";

const cx = classNames.bind(styles);

export const SocialBox = ({ text }: { text: string }) => {
  return (
    <div className={cx("social-login-container")}>
      <span className={cx("social-login-text")}>{text}</span>
      <div className={cx("social-login-icon")}>
        <Link href="https://www.google.com">
          <Image src={Googlelogin} width={42} height={42} alt="google" />
        </Link>
        <Link href="https://www.kakaocorp.com/page">
          <Image src={Kakaologin} width={42} height={42} alt="kakao" />
        </Link>
      </div>
    </div>
  );
};
