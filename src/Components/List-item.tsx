import React from "react";
import editIcon from "../style/icons/pencil.svg";
import deleteIcon from "../style/icons/delete.svg";
import { Link } from "react-router-dom";

interface LitsItemProps {
  itemId: number;
  text: string;
}

const ListItem = ({ text, itemId }: LitsItemProps) => {
  return (
    <div className="list-item">
      <div className="list-item-el list-item-num">
        <span>Задача №{itemId}</span>
      </div>
      <div className="list-item-el list-item-text">
        <span>{text}</span>
      </div>
      <div className="list-item-el list-item-buttons">
        <Link to={`/edit/${itemId}`}>
          <img className="icon" src={editIcon} alt="edit icon" />
        </Link>
        <img className="icon" src={deleteIcon} alt="delete icon" />
      </div>
    </div>
  );
};

export default ListItem;
