import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from 'routes/Home';
import Guide from 'routes/Guide';
import Links from 'routes/Links';
import About from 'routes/About';

import MainNavigation from 'components/MainNavigation';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <header className="app-header">
          <MainNavigation />
      </header>
      <main className="app-content" id="content">
        <article className="app-content-article">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/guide">
              <Guide />
            </Route>
            <Route path="/links">
              <Links />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </article>
      </main>
      <footer className="app-footer">
      </footer>
    </BrowserRouter>
  );
}

export default App;
