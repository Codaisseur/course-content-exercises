import React from "react";
import { Route, Switch } from "react-router-dom";
import DevelopersList from "./components/DevelopersList";
import HomePage from "./components/HomePage";
import Toolbar from "./components/Toolbar";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Toolbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/developers' component={DevelopersList} />
      </Switch>
    </div>
  );
}

export default App;
