import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Layout from "./components/Layout/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <nav>
            <Link to="home">Home</Link> {/*<Link to="login">Login</Link> */}{" "}
            <Link to="dashboard">Dashboard</Link>{" "}
            <Link to="family">Family</Link>
          </nav>

          <Router>
            <Home path="home" component={Home} />

            <Dashboard path="/dashboard" component={Dashboard} />
            <Family path="family">
              <Family path="/" />
              <Family path="/" />
            </Family>
            <NotFound default />
          </Router>
        </Layout>
      </div>
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
