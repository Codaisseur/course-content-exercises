import React from "react";
import { Route, Switch } from "react-router-dom";
import DevelopersList from "./components/DevelopersList";
import HomePage from "./components/HomePage";
import Toolbar from "./components/Toolbar";
import PostPage from "./components/PostPage";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Toolbar />
      <Switch>
        <Route path='/read/:id' component={PostPage} />
        <Route path='/developers' component={DevelopersList} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
