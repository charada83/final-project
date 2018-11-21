import React from "react";
import Login from "./Login";
import { auth } from "../../firebase";

export default function PrivateRoute({ component: Component, ...rest }) {
  if (auth.currentUser) {
    return <Component {...rest} />;
  }

  return <Login />;
}
