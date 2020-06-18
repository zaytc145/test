import React, { useState, useEffect } from "react";
import Button from "./Button";
import ListItem from "./List-item";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState, getItems, createItem } from "../Store";

const Main = () => {
  const [modal, showModal] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  const renderList = (items: any[]) => {
    return items.map((el, i) => {
      return <ListItem text={el.title} itemId={el.id} key={i} />;
    });
  };

  return (
    <div className="body">
      <div className="head">
        <h1>Список задач</h1>
        <Button text="Добавить" type="create" onClick={() => showModal(true)} />
      </div>
      <div className="list">{renderList(items)}</div>
      <Modal
        show={modal}
        closeModal={() => showModal(false)}
        onClick={ (title: string) =>  dispatch(createItem(title))}
      />
    </div>
  );
};

export default Main;
