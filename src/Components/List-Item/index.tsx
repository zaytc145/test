import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../Store";

import "./index.scss";
import editIcon from "../../style/icons/pencil.svg";
import deleteIcon from "../../style/icons/delete.svg";

interface Props {
  itemId: number;
  text: string;
}

const ListItem = ({ text, itemId }: Props) => {
  const dispatch = useDispatch();

  const removeItem = (id: number) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="list-item">
      <div className="list-item-el list-item-num">Задача №{itemId}</div>
      <div className="list-item-el list-item-text">{text}</div>
      <div className="list-item-el list-item-buttons">
        <Link to={`/edit/${itemId}`}>
          <img className="icon" src={editIcon} alt="edit icon" />
        </Link>
        <button className="delete-icon-button" onClick={() => removeItem(itemId)}>
          <img className="icon" src={deleteIcon} alt="delete icon" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(ListItem);
