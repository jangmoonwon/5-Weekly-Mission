import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { useFetchUser } from "../../hooks/useFetchUser";
import { Profile } from "../Profile/Profile";

const cx = classNames.bind(styles);

export const NavigationBar = ({ isSticky }) => {
  const { data, loading } = useFetchUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <nav className={cx("container", { sticky: isSticky })}>
      <div className={cx("items")}>
        <Link to="/">
          <img src={Logo} alt="Linkbrary-logo" />
        </Link>
        {/* {profile ? <Profile profile={profile} /> : "로그인 버튼"} */}
        {loading ? (
          <h1>로딩</h1>
        ) : profile ? (
          <Profile profile={profile} />
        ) : (
          "로그인 버튼"
        )}
      </div>
    </nav>
  );
};
