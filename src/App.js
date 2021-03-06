import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./views/Home";
import BabyDetails from "./views/BabyDetails";
import Layout from "./components/layout/index";
import Memories from "./views/Memories";
import Milestones from "./views/Milestones";
import PrivateRoute from "./components/auth/PrivateRoute";
import firebase from "./firebase";
import Contact from "./views/Contact";

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <Layout>
        <Router>
          <Home path="/" component={Home} />
          <PrivateRoute path="babydetails" component={BabyDetails} />
          <PrivateRoute
            path="/babydetails/memories/:babyID"
            component={Memories}
          />
          <PrivateRoute
            path="/babydetails/milestones/:babyID"
            component={Milestones}
          />
          <PrivateRoute path="/contact" component={Contact} />
          <NotFound default />
        </Router>
      </Layout>
    );
  }
}

const NotFound = () => <p>Sorry, nothing here</p>;

export default App;
