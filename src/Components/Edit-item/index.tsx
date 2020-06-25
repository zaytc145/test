import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button";
import { RootState, getItems, updateItem } from "../../Store";
import "./index.scss";

const EditInfo = ({ match }: any) => {
  let { id } = match.params;
  const dispatch = useDispatch();
  const [note, setNote] = useState("");
  const items = useSelector((state: RootState) => state.items.data);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  useEffect(() => {
    if (items.length !== 0) {
      setNote(items.find((el) => el.id === +id)!.title);
    }
  }, [items]);

  const oneUpdateItem = useCallback(() => dispatch(updateItem(id, note)), [dispatch, note, id]);

  return (
    <div className="body">
      <div className="head">
        <h1>Задача №{id}</h1>
      </div>
      <div className="item-description">
        <h2>Краткое описание</h2>
        <input className="text-input" value={note} type="text" onChange={(e) => setNote(e.target.value)} />
        <Link to="/">
          <Button text="Вернуться в список" type="back" onClick={oneUpdateItem}></Button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(EditInfo);
