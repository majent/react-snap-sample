import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import page1 from "./page1";
import page2 from "./page2";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={page1} />
        <Route exact path="/page2" component={page2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
