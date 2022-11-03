import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Produtos from "./Produtos";
import UmProduto from "./UmProduto";
import Menu from "./Menu";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Produtos />
          </Route>
          <Route exact path="/products/:id">
            <UmProduto />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
