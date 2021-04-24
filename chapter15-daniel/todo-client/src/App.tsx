import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ScreenA from "./components/ScreenA";

function App() {

  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/a" component={ScreenA} />
    </Switch>
  );
}
export default App;
