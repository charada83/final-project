import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import FamilyTree from "./views/FamilyTree";
import FamilyInvite from "./components/Dialogs/FamilyInvite";
import Layout from "./components/Layout/index";
import Memories from "./views/Memories";
import Milestones from "./views/Milestones";
import Notifications from "./components/Dialogs/Notifications";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Layout styles={{ height: "100%" }}>
          <Router>
            <Home path="/" />
            <Dashboard path="dashboard" />
            <Memories path="/dashboard/memories" />
            <Milestones path="/dashboard/milestones" />
            {/* <Family path="family" /> */}
            <FamilyTree path="/family/family-tree" />
            <FamilyInvite path="/family/invite" />
            <Notifications path="/notifications" />
            <NotFound default />
          </Router>
        </Layout>
      </Provider>
    );
  }
}

const NotFound = () => <p>Sorry, nothing here</p>;

export default App;
