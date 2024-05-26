import Link from "next/link";
import { ComponentProps } from "react";
import styles from "./AuthHeaderDescAction.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type LinkProps = ComponentProps<typeof Link> & {
  children: React.ReactNode;
};

export const AuthHeaderDescAction = ({ children, ...props }: LinkProps) => {
  return (
    <Link className={cx("link")} {...props}>
      {children}
    </Link>
  );
};
