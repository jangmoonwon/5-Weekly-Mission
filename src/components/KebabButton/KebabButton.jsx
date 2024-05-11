import { useState } from "react";
import { LinkDeleteModal } from "../Modal/LinkDeleteModal/LinkDeleteModal";
import { TestModal } from "../Modal/TestModal/TestModal";
import kebabIcon from "../../assets/kebab.svg";
import "../KebabButton/KebabButton.css";

function KebabButton({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addModal, setAddModal] = useState(false);

  const kebabPopover = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteModal = () => {
    setModalIsOpen(true);
  };

  const handleAddModal = () => {
    setAddModal(true);
  };

  const handleClosedModal = () => {
    setModalIsOpen(false);
    setAddModal(false);
  };

  return (
    <div className="kebab-container">
      <div onClick={kebabPopover}>
        <img src={kebabIcon} alt="kebab" />
      </div>
      {isOpen && (
        <ul className="kebab-popover">
          <button className="kebab-text" onClick={handleDeleteModal}>
            삭제하기
          </button>
          <li className="kebab-text" onClick={handleAddModal}>
            폴더에 추가
          </li>
        </ul>
      )}
      {modalIsOpen && (
        <LinkDeleteModal item={item} onClose={handleClosedModal} />
      )}
      {addModal && <TestModal onClose={handleClosedModal} />}
    </div>
  );
}

export default KebabButton;
