import Image from "next/image";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ProfileProps = {
  profile: {
    imageSource: string;
    email: string;
  };
};

export default function Profile({ profile }: ProfileProps) {
  return (
    <div className={cx("container")}>
      <Image
        className={cx("profile")}
        src={profile.imageSource}
        alt="profile"
        width={16}
        height={16}
      />
      <div>{profile.email}</div>
    </div>
  );
}
