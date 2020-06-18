import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../style/style.scss";

const Main = React.lazy(() => import("./Main"));
const EditItem = React.lazy(() => import("./Edit-item"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/edit/:id" component={EditItem}></Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
