import React, { Component } from "react";
// import ReactDOM from "react-dom";
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
            <Link to="home">Home</Link> <Link to="login">Login</Link>{" "}
            <Link to="dashboard">Dashboard</Link>{" "}
            <Link to="family">Family</Link>
          </nav>

          <Router>
            <Home path="home" component={Home} />
            <Login path="login" />
            <Dashboard path="/dashboard" component={Dashboard} />
            <Family path="family">
              <FamilyIndex path="/" />
              <Family path="/" />
            </Family>
            <NotFound default />
          </Router>
        </Layout>
      </div>
    );
  }
}

const Login = () => (
  <div>
    <h2>Login Page</h2>
  </div>
);

// const Family = props => (
//   <div>
//     <h2>Family {props.invoiceId}</h2>
//   </div>
// );

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
    {/* <form
        onSubmit={event => {
          event.preventDefault();
          const id = event.target.elements[0].value;
          event.target.reset();

          // pretend like we saved a record to the DB here
          // and then we navigate imperatively
          props.navigate(id);
        }}
      >
        <p>
          <label>
            New Invoice ID: <input type="text" />
          </label>
          <button type="submit">create</button>
        </p>
      </form> */}

    {/* {props.children} */}
  </div>
);

const FamilyIndex = () => (
  <div>
    <p>Maybe put some pretty graphs here or something.</p>
  </div>
);

const NotFound = () => <p>Sorry, nothing here</p>;

export default App;
