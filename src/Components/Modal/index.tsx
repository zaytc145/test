import React, { useState } from "react";
import close from "../../style/icons/cross.svg";
import Button from "../Button";
import { createPortal } from "react-dom";
import "./index.scss";

interface ModalProps {
  show: boolean;
  onClick: (title: string) => void;
  closeModal: () => void;
}

const Modal = ({ show, onClick, closeModal }: ModalProps) => {
  const [note, setNote] = useState("");
  const [err, setErr] = useState(false);

  if (show) {
    return createPortal(
      <div className="modal">
        <div className="modal-body">
          <div className="icon close-icon" onClick={closeModal}>
            <img src={close} alt="close modal icon"></img>
          </div>
          <h2>Краткое описание</h2>
          <input className="text-input " value={note} type="text" onChange={(e) => setNote(e.target.value)} />
          {err && <span>Заголовок не может быть пустым</span>}
          <Button
            text="Добавить"
            type="create"
            onClick={async () => {
              if (note.length === 0) {
                return setErr(true);
              } else {
                setErr(false);
                await onClick(note);
                setNote("");
                closeModal();
              }
            }}
          />
        </div>
      </div>,
      document.getElementById("modal-root") as HTMLDivElement
    );
  }
  return null;
};

export default React.memo(Modal);
