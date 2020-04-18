import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Store from "./pages/Store";
import ContentWrapper from "./components/ContentWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./utils/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <ContentWrapper>
          <Header />
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <PrivateRoute exact path="/admin" component={Admin} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/store" component={Store} />
            <PrivateRoute exact path="/account" component={Account} />
          </Switch>
        </ContentWrapper>
        <Footer />
      </Router>
    );
  }
}

export default App;
