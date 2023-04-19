import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import ProductProvider from './context/Provider';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerOrder from './pages/CustomerOrder';
import OrderDetails from './pages/OrderDetails';
import SellerOrders from './pages/SellerOrders';

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
      <ProductProvider>
        <Route exact path="/customer/products" component={ CustomerProducts } />
        <Route exact path="/customer/checkout" component={ CustomerCheckout } />
        <Route exact path="/customer/orders/" component={ CustomerOrder } />
        <Route exact path="/seller/orders/" component={ SellerOrders } />
        <Route exact path="/seller/orders/:id" component={ OrderDetails } />
        <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      </ProductProvider>
    </Switch>
  );
}
export default App;
