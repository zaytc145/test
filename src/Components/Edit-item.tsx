import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, getItems, updateItem } from "../Store";
import { title } from "process";

const ItemInfo = ({ match }: any) => {
  let { id } = match.params;
  const dispatch = useDispatch();
  const [note, setNote] = useState("");
  const items = useSelector((state: RootState) => state.items);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  useEffect(() => {
    if (items.length !== 0) {
      setNote(items.find((el) => el.id === +id)!.title);
    }
  },[items]);

  return (
    <div className="body">
      <div className="head">
        <h1>Задача №{id}</h1>
      </div>
      <div className="item-description">
        <h2>Краткое описание</h2>
        <input className="text-input" value={note} type="text" onChange={(e) => setNote(e.target.value)} />
        <Link to="/">
          <Button text="Вернуться в список" type="back" onClick={() => dispatch(updateItem(id, note))}></Button>
        </Link>
      </div>
    </div>
  );
};

export default ItemInfo;
