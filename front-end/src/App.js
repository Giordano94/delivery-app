import React from 'react';
import './App.css';
import { Switch, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login'

function App() {
  return (
    <Switch>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
    </Switch>
  );
}

export default App;
