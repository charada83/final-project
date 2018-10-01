import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Baby Record</h1>
        <nav>
          <Link to="/">Home</Link> <Link to="login">Login</Link>{" "}
          <Link to="dashboard">Dashboard</Link> <Link to="family">Family</Link>
        </nav>

        <Router>
          <Home path="/" />
          <Login path="login" />
          <Dashboard path="/dashboard" />
          <Family path="family">
            <FamilyIndex path="/" />
            <Family path="/" />
          </Family>
          <NotFound default />
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
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
