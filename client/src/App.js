import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Store from "./pages/Store";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/store" component={Store} />
        </div>
      </Router>
    );
  }
}

export default App;
