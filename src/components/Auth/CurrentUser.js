import React from "react";
import PropTypes from "prop-types";
import { auth } from "../../firebase";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const CurrentUser = ({ user }) => {
  return (
    <div style={{ display: "flex" }}>
      {user.displayName && <h4>Welcome {user.displayName}</h4>}
      {user.photoURL && (
        <img
          style={{ height: "40px", margin: "10px" }}
          src={user.photoURL}
          alt={user.displayName}
        />
      )}

      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => auth.signOut()}
      >
        <Typography color="secondary"> Sign Out </Typography>
      </Button>
    </div>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string
  })
};

export default CurrentUser;
