import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ (props) => <Redirect to="/login" { ...props } /> } />
      <Route exact path="/login" component={ Login } />
    </Switch>
  );
}

export default App;
