import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import ManageEmployee from "../pages/ManageEmployee";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/employee" component={ManageEmployee} exact />
    </Switch>
  );
};

export default Routes;
