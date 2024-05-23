import styles from "./ToolBarBtnList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ToolBarBtnListProps = {
  text: string;
  id: number;
  currentId: number;
  onClick: () => void;
};

export default function ToolBarBtnList({
  text,
  id,
  currentId,
  onClick,
}: ToolBarBtnListProps) {
  const isSelected = currentId === id;
  return (
    <button
      className={cx("container", { selected: isSelected })}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
}
