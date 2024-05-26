import styles from "./AuthHeader.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// interface LoginHeaderProps {
//   href: string;
//   message: string;
//   linkName: string;
// }

// export const AuthHeader = ({ href, message, linkName }: LoginHeaderProps) => {
//   return (
//     <header className={cx("header-container")}>
//       <Link href="/">
//         <Image src={Logo} alt="Logo" width={210} height={38} priority />
//       </Link>
//       <div className={cx("header-content")}>
//         <span className={cx("header-message")}>{message}</span>
//         <Link href={href} className={cx("header-link")}>
//           {linkName}
//         </Link>
//       </div>
//     </header>
//   );
// };

type AuthHeaderProps = {
  children: React.ReactNode;
};

export const AuthHeader = ({ children }: AuthHeaderProps) => {
  return <header className={cx("header-container")}>{children}</header>;
};
