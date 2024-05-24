import styles from "./CardContent.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface CardContentProps {
  elapsedTime: string;
  description?: string;
  createdAt: string;
}

export default function CardContent({
  elapsedTime,
  description,
  createdAt,
}: CardContentProps) {
  return (
    <div className={cx("container")}>
      <p className={cx("elapsed-time")}>{elapsedTime}</p>
      <p className={cx("description")}>{description}</p>
      <p className={cx("created-at")}>{createdAt}</p>
    </div>
  );
}
