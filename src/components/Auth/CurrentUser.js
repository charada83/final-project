import React, { Fragment, PropTypes } from "react";
import { auth } from "../../firebase";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const CurrentUser = ({ user }) => {
  return (
    <div style={{ display: "flex" }}>
      <h4>Welcome {user.displayName}</h4>
      {/* <img src={user.photoURL} alt={user.displayName} /> */}

      <Button
        variant="contained"
        color="primary"
        mini
        onClick={() => auth.signOut()}
      >
        <Typography color="secondary"> Sign Out </Typography>
      </Button>
    </div>
  );
};

// CurrentUser.propTypes = {
//   user: PropTypes.string({
//     displayName: PropTypes.string,
//     email: PropTypes.string.isRequired,
//     photoURL: PropTypes.string,
//     uid: PropTypes.string.isRequired
//   })
// };

export default CurrentUser;
