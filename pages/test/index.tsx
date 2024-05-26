
import styles from "./test.module.scss";
import classNames from "classnames/bind";
import { Button } from "./test";

const cx = classNames.bind(styles);

export default function Test() {
  return (
    <div className={cx("container")}>
      <Button variant="red" size="sm" className={cx("font-weight")}>
        <span>red</span>
      </Button>
      <Button variant="sky" size="lg">
        <span>sky</span>
      </Button>
    </div>
  );
}
