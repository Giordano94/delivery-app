import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import ProductProvider from './context/Provider';
import CustomerCheckout from './pages/CustomerCheckout';

// Fluxo Admin
import ProviderAuth from './hooks/authoProvider';
import ProviderAdmin from './hooks/adminProvider';

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
            <Route exact path="/admin/manage" component={ AdminManage } />
          </ProviderAdmin>
        </ProductProvider>
      </ProviderAuth>
    </Switch>
  );
}

export default App;
