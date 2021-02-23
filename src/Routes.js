import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Body from "./components/Body";
import CurrentFx from "./components/CurrentFx";

export default function Routes() {
  return (
    <Switch>
      <Route path="/current-fx" component={CurrentFx} />
      <Route exact path="/" component={Body} />
    </Switch>
  );
}
