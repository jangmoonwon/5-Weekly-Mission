import styles from "./ToolBar.module.scss";
import classNames from "classnames/bind";
import ToolBarBtnList from "../tool-bar-button-list/ToolBarBtnList";
import { useState } from "react";
import AddFolderButton from "../add-folder-button/AddFolderButton";
import FolderButtons from "@/components/folder/folder-buttons/FolderButtons";
import Share from "@/public/share.svg";
import Pen from "@/public/pen.svg";
import Delete from "@/public/delete.svg";
import { getFolders } from "@/pages/api/getFolders";
import { useQuery } from "@tanstack/react-query";

const ALL_FOLDER_ID = 0;
const ALL_FOLDER_NAME = "전체";

const cx = classNames.bind(styles);

export default function ToolBar() {
  const { data } = useQuery({
    queryKey: ["folders"],
    queryFn: getFolders,
  });
  const [currentId, setCurrentId] = useState(ALL_FOLDER_ID);
  const [currentName, setCurrentName] = useState(ALL_FOLDER_NAME);

  const handleFolderClick = (currentId: number, currentName: string) => {
    setCurrentId(currentId);
    setCurrentName(currentName);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("folder-list")}>
        <ToolBarBtnList
          key={"all"}
          text={"전체"}
          currentId={currentId}
          id={ALL_FOLDER_ID}
          onClick={() => handleFolderClick(ALL_FOLDER_ID, ALL_FOLDER_NAME)}
        />
        {data?.map((item) => (
          <ToolBarBtnList
            key={item.id}
            currentId={currentId}
            id={item.id}
            text={item.name}
            onClick={() => handleFolderClick(item.id, item.name)}
          />
        ))}
      </div>
      <div className={cx("add-button")}>
        <AddFolderButton />
      </div>
      <h2 className={cx("folder-name")}>{currentName}</h2>
      <div className={cx("buttons")}>
        <FolderButtons
          text={"공유"}
          src={Share}
          alt={"share"}
          onClick={() => console.log("hi")}
        />
        <FolderButtons
          text={"이름 변경"}
          src={Pen}
          alt={"pen"}
          onClick={() => console.log("hi")}
        />
        <FolderButtons
          text={"삭제"}
          src={Delete}
          alt={"delete"}
          onClick={() => console.log("hi")}
        />
      </div>
    </div>
  );
}
