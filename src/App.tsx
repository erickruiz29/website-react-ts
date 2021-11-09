import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import {About} from "./pages/About";
import {HomePage} from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about-me">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
