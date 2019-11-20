import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Hello from './components/Hello';
import Goodbye from './components/Goodbye';
import Colors from './components/Colors';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

function App() {
  let store = { termOfAffection: "lover" }
  return (
    <div className="App">
      <Nav />
      <main>
      <Switch>
        <Route exact path="/" render={ ({history}) =>{ return <Hello history={history} /> } } />
        <Route path="/goodbye" render={ () => {return <Goodbye store={store} />} } />
        <Route path="/colors/:color" component={Colors} />
        <Route component={NotFound} />
      </Switch>
      </main>
    </div>
  );
}

export default App;
