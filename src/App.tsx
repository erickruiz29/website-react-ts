import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Scrapbook } from './pages/Scrapbook';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/scrapbook" exact>
          <Scrapbook />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
