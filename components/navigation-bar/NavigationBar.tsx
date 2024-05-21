import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Profile from "../profile/Profile";

const cx = classNames.bind(styles);

type NavigationBarProps = {
  profile: {
    email: string;
    imageSource: string;
  } | null;
  isSticky: boolean;
};

const NavigationBar = ({ profile, isSticky }: NavigationBarProps) => {
  return (
    <nav className={cx("container", { sticky: isSticky })}>
      <div className={cx("items")}>
        <Link href="/">
          <Image src={Logo} alt="Linkbrary-logo" width={133} height={24} />
        </Link>
        {profile ? <Profile profile={profile} /> : "로그인 버튼"}
      </div>
    </nav>
  );
};

export default NavigationBar;
