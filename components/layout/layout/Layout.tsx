import { ReactNode } from "react";
import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import Footer from "@/components/footer/Footer";
import NavigationBar from "@/components/header/navigation-bar/NavigationBar";
import { useUser } from "@/pages/api/useUser";

const cx = classNames.bind(styles);

interface LayoutProps {
  isSticky?: boolean;
  children: ReactNode;
}

export default function Layout({ children, isSticky = true }: LayoutProps) {
  const { data } = useUser();
  const profile = data
    ? { email: data.email, imageSource: data.profileImageSource }
    : null;
  return (
    <>
      <NavigationBar isSticky={isSticky} profile={profile} />
      <main className={cx("container")}>{children}</main>
      <Footer />
    </>
  );
}
