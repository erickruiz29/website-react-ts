import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import {HomePage} from "./pages/HomePage";
import {SecondPage} from "./pages/SecondPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/page-2">
          <SecondPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
