import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./views/Home";
import BabyDetails from "./views/BabyDetails";
import Family from "./views/Family";
import Layout from "./components/layout/index";
import Memories from "./views/Memories";
import Milestones from "./views/Milestones";
import Notifications from "./components/dialogs/Notifications";
import PrivateRoute from "./components/auth/PrivateRoute";
import firebase from "./firebase";

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
          <PrivateRoute path="/babydetails/memories" component={Memories} />
          <PrivateRoute
            path="/babydetails/milestones/:babyID"
            component={Milestones}
          />
          <PrivateRoute path="/family" component={Family} />
          <PrivateRoute path="/notifications" component={Notifications} />
          <NotFound default />
        </Router>
      </Layout>
    );
  }
}

const NotFound = () => <p>Sorry, nothing here</p>;

export default App;
