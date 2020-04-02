import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from 'routes/Home';
import Guide from 'routes/Guide';
import Links from 'routes/Links';
import About from 'routes/About';

import SkipLink from 'components/SkipLink';
import MainNavigation from 'components/MainNavigation';
import SocialNavigation from 'components/SocialNavigation';

import './App.css';

const App = () => {
  return (
    <BrowserRouter basename="/a11y-example">
      <header className="app-header">
          <SkipLink href="#content">
            Skip Navigation
          </SkipLink>
          <SkipLink href="#social-navigation">
            Skip to Social
          </SkipLink>
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
        <p>
          © 2020 Serhii Yakymuk <br />
          All Rights Reserved
        </p>
        <SocialNavigation />
      </footer>
    </BrowserRouter>
  );
}

export default App;
