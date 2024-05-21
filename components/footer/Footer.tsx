import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import FOOTER_LOGO_LIST from "./constant";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("container")}>
      <div className={cx("footer-content")}>
        <p className={cx("footer-copyright")}>©codeit - 2023</p>
        <div className={cx("footer-faq")}>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">FAQ</Link>
        </div>
        <div className={cx("footer-logos")}>
          {FOOTER_LOGO_LIST.map((list) => (
            <Link
              href={list.link}
              rel="noreferrer"
              target="_blank"
              key={list.name}
            >
              <Image src={list.url} alt={list.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
