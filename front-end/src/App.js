import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductProvider from './context/Provider';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerProducts from './pages/CustomerProducts';
import Login from './pages/Login';
import Register from './pages/Register';

// Fluxo Admin
import ProviderAdmin from './hooks/adminProvider';
import ProviderAuth from './hooks/authoProvider';
import adminManage from './pages/Admin';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={ (props) => <Redirect to="/login" { ...props } /> }
      />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <ProviderAuth>
        <ProductProvider>
          <ProviderAdmin>
            <Route exact path="/customer/products" component={ CustomerProducts } />
            <Route exact path="/customer/checkout" component={ CustomerCheckout } />
            <Route exact path="/admin/manage" component={ adminManage } />
          </ProviderAdmin>
        </ProductProvider>
      </ProviderAuth>
    </Switch>
  );
}

export default App;
