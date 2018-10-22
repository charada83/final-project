import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import FamilyTree from "./views/FamilyTree";
import FamilyInvite from "./components/dialogs/FamilyInvite";
import Layout from "./components/layout/index";
import Memories from "./views/Memories";
import Milestones from "./views/Milestones";
import Notifications from "./components/dialogs/Notifications";
import { Provider } from "./context";
import firebase from "./firebase";

class App extends Component {
  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      //console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem("user");
      }
    });
  }
  render() {
    return (
      <Provider>
        <Layout>
          <Router>
            <Home path="/" component={Home} />
            <Dashboard path="dashboard" component={Dashboard} />
            <Memories path="/dashboard/memories" component={Memories} />
            <Milestones path="/dashboard/milestones" component={Milestones} />
            {/* <Family path="family" /> */}
            <FamilyTree path="/family/family-tree" component={FamilyTree} />
            <FamilyInvite path="/family/invite" component={FamilyInvite} />
            <Notifications path="/notifications" component={Notifications} />
            <NotFound default />
          </Router>
        </Layout>
      </Provider>
    );
  }
}

const NotFound = () => <p>Sorry, nothing here</p>;

export default App;
