import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import "../style/style.scss";
import ItemInfo from "./Item-info";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/edit/:id" component={ItemInfo}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
