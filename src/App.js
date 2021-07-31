import React, { Component } from 'react';
import {Switch,Route as Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.js';
import Cart from './components/Cart';
import Details from './components/details.js';
import ProductList from './components/product-list.js';
import Default from './components/default.js';
import Modal from './components/Modal';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch >
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;