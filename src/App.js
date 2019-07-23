import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/kitten/:count" component={() => <Kitten count={3} />} /> */}
      <Route path="/about/" component={About} />
      <Route path="/contact/" component={Contact} />
      {/* <Route path="/kitten/" component={Kitten} /> */}
      <Route path="/navigation/" component={Navigation} />
    </Switch>
    <Navigation />
  </div>
);

export default App;
