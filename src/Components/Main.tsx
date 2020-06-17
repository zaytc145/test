import React, { useState } from "react";
import Button from "./Button";
import ListItem from "./List-item";
import Modal from "./Modal";

const Main = () => {
  const [modal, showModal] = useState(false);

  const testData = [
    {
      text: "item 1",
      id: 1,
    },
    {
      text: "item 2",
      id: 2,
    },
  ];

  const renderList = (items: any[]) => {
    return items.map((el, i) => {
      return <ListItem text={el.text} itemId={el.id} key={i} />;
    });
  };

  return (
    <div className="body">
      <div className="head">
        <h1>Список задач</h1>
        <Button text="Добавить" type="create" onClick={() => showModal(true)} />
      </div>
      <div className="list">{renderList(testData)}</div>
      <Modal show={modal} onClick={() => showModal(false)} />
    </div>
  );
};

export default Main;
