import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ItemInfo = ({ match }: any) => {
  let { id } = match.params;
  const [note, setNote] = useState("");

  return (
    <div className="body">
      <div className="head">
        <h1>Задача №{id}</h1>
      </div>
      <div className="item-description">
        <h2>Краткое описание</h2>
        <input className="text-input" value={note} type="text" onChange={(e) => setNote(e.target.value)} />
        <Link to="/">
          <Button text="Вернуться в список" type="back" onClick={() => undefined}></Button>
        </Link>
      </div>
    </div>
  );
};

export default ItemInfo;
