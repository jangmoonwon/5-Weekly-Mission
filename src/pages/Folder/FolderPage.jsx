import { useState } from "react";
import { useUsersFolder } from "../../hooks/useUsersFolder";
import LinkBar from "../../components/LinkBar/LinkBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import FolderList from "../FolderList/FolderList";
import "../Folder/FolderPage.css";
import addImg from "../../assets/add.svg";
import { Layout } from "../../sharing/ui-layout/Layout";
import { AddFolderModal } from "../../components/Modal/AddFolderModal/AddFolderModal";
import { DeleteFolderModal } from "../../components/Modal/DeleteFolderModal/DeleteFolderModal";
import { ShareModal } from "../../components/Modal/ShareModal/ShareModal";
import shareIcon from "../../assets/share.svg";
import penIcon from "../../assets/pen.svg";
import deleteIcon from "../../assets/delete.svg";
import { EditFolderModal } from "../../components/Modal/EditFolderModal/EditFolderModal";

function FolderPage() {
  const { data } = useUsersFolder();

  const [activeButton, setActiveButton] = useState("전체");
  const [activeButtonId, setActiveButtonId] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleFolderClick = (folderId, folderName) => {
    setActiveButton(folderName);
    setActiveButtonId(folderId);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleShareClick = () => {
    setIsShare(true);
  };

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleDeleteClick = () => {
    setIsDelete(true);
  };

  const handleClosedModal = () => {
    setIsOpen(false);
    setIsShare(false);
    setIsEdit(false);
    setIsDelete(false);
  };

  return (
    <Layout isSticky={false}>
      <LinkBar />
      <SearchBar />
      <div className="folder-container">
        <div className="toolbar-container">
          <div className="toolbar-box">
            <button
              className="toolbar-btn"
              onClick={() => handleFolderClick("", "전체")}
              id="all"
            >
              전체
            </button>
            {data &&
              data.data.map((item) => (
                <div key={item.id}>
                  <div className="toolbar">
                    <button
                      className="toolbar-btn"
                      onClick={() => handleFolderClick(item.id, item.name)}
                      id={item.id}
                    >
                      {item.name}
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="add-btn-box">
            <button className="add-btn" onClick={handleModalOpen}>
              폴더 추가
            </button>
            {isOpen && <AddFolderModal onClose={handleClosedModal} />}
            <img className="add-icon" src={addImg} alt="폴더 추가 이미지" />
          </div>
          {activeButton !== "전체" ? (
            <div className="btns-box">
              <button className="btns-item" onClick={handleShareClick}>
                <img src={shareIcon} alt="share" />
                <span className="btns-text">공유</span>
              </button>
              <button className="btns-item" onClick={handleEditClick}>
                <img src={penIcon} alt="edit" />
                <span className="btns-text">이름 변경</span>
              </button>
              <button className="btns-item" onClick={handleDeleteClick}>
                <img src={deleteIcon} alt="delete" />
                <span className="btns-text">삭제</span>
              </button>
              {isShare && <ShareModal onClose={handleClosedModal} />}
              {isEdit && <EditFolderModal onClose={handleClosedModal} />}
              {isDelete && <DeleteFolderModal onClose={handleClosedModal} />}
            </div>
          ) : null}
          <span className="folder-name">{activeButton}</span>
        </div>
        {activeButtonId === "" ? (
          <FolderList />
        ) : (
          <span className="no-link-msg">저장된 링크가 없습니다</span>
        )}
      </div>
    </Layout>
  );
}

export default FolderPage;
