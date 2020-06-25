import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../button";
import ListItem from "../list-item";
import Modal from "../modal";
import { RootState, getItems, createItem, ItemsArray } from "../../Store";
import "./index.scss";

const Main = () => {
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.data);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  const renderList = (items: ItemsArray) => {
    return items.map((el) => {
      return <ListItem text={el.title} itemId={el.id} key={el.id} />;
    });
  };

  const addItem = (title: string) => {
    dispatch(createItem(title));
  };

  return (
    <div className="body">
      <div className="head">
        <h1>Список задач</h1>
        <Button text="Добавить" type="create" onClick={() => setIsModal(true)} />
      </div>
      <div className="list">{renderList(items)}</div>
      <Modal show={isModal} closeModal={() => setIsModal(false)} onClick={addItem} />
    </div>
  );
};

export default React.memo(Main);
