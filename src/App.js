import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import FamilyTree from "./views/FamilyTree";
import Layout from "./components/Layout/index";
import Memories from "./views/Memories";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Layout>
            <Router>
              <Home path="/" />
              <Dashboard path="dashboard">
                <Memories path="/dashboard/memories" />
              </Dashboard>
              <Family path="family">
                <FamilyTree path="family-tree" />
                <Family path="invite" />
              </Family>
              <NotFound default />
            </Router>
          </Layout>
        </div>
      </Provider>
    );
  }
}

const Family = props => (
  <div>
    <h2>Family</h2>
    <ul>
      <li>
        <Link to="/family/invite">Invite</Link>
      </li>
      <li>
        <Link to="/family/family-tree">Family Tree</Link>
      </li>
    </ul>
  </div>
);

const NotFound = () => <p>Sorry, nothing here</p>;

export default App;
