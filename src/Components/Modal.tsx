import React, { useState } from "react";
import close from "../style/icons/cross.svg";
import Button from "./Button";
import { createPortal } from "react-dom";

interface ModalProps {
  show: boolean;
  onClick: () => void;
}

const Modal = ({ show, onClick }: ModalProps) => {
  const [note, setNote] = useState("");
  const [err, setErr] = useState(false);

  if (show) {
    return createPortal(
      <div className="modal">
        <div className="modal-body">
          <img className="icon close-icon" src={close} alt="close modal icon" onClick={onClick}></img>
          <h2>Краткое описание</h2>
          <input className="text-input " value={note} type="text" onChange={(e) => setNote(e.target.value)} />
          {err && <span>Заголовок не может быть пустым</span>}
          <Button
            text="Добавить"
            type="create"
            onClick={() => {
              if (note.length === 0) {
                return setErr(true);
              } else {
                setErr(false);
                console.log(note);
                onClick();
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

export default Modal;
