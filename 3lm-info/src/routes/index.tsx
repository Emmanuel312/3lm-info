import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import AddEmployee from "../pages/AddEmployee";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/add" component={AddEmployee} exact />
    </Switch>
  );
};

export default Routes;
