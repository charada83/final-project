import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./views/Home";
import BabyDetails from "./views/BabyDetails";
import FamilyTree from "./views/FamilyTree";
import FamilyInvite from "./components/dialogs/FamilyInvite";
import Layout from "./components/layout/index";
import Memories from "./views/Memories";
import Milestones from "./views/Milestones";
import Notifications from "./components/dialogs/Notifications";
import { Provider } from "./context";
import firebase from "./firebase";
import Login from "./components/auth/Login";
import { database } from "./firebase";

class App extends Component {
  // authListener() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({ user });
  //     } else {
  //       this.setState({ user: null });
  //     }
  //   });
  // }
  render() {
    return (
      <Provider>
        <Layout>
          <Router>
            <Home path="/" component={Home} />
            <BabyDetails path="babydetails" component={BabyDetails} />
            <Memories path="/babydetails/memories" component={Memories} />
            <Milestones path="/babydetails/milestones" component={Milestones} />
            {/* <Family path="family" /> */}
            <FamilyTree path="/family/family-tree" component={FamilyTree} />
            <FamilyInvite path="/family/invite" component={FamilyInvite} />
            <Notifications path="/notifications" component={Notifications} />
            <Login path="/login" component={Login} />
            <NotFound default />
          </Router>
        </Layout>
      </Provider>
    );
  }
}

const NotFound = () => <p>Sorry, nothing here</p>;

export default App;
