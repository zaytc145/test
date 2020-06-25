import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import ListItem from "../List-Item";
import Modal from "../Modal";
import { RootState, getItems, createItem } from "../../Store";
import "./index.scss";

const Main = () => {
  const [modal, showModal] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.data);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  const renderList = (items: any[]) => {
    return items.map((el) => {
      return <ListItem text={el.title} itemId={el.id} key={el.id} />;
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
        onClick={(title: string) => dispatch(createItem(title))}
      />
    </div>
  );
};

export default React.memo(Main);
