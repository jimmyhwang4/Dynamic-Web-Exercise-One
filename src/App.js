import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import ArticleListing from "./pages/ArticleListing";
import Article from "./pages/Article";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/article/:id">
          <Article />
        </Route>
        <Route path="/">
          <ArticleListing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
