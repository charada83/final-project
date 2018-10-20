import React from "react";
import { auth } from "../../firebase";
import Button from "@material-ui/core/Button";

const CurrentUser = ({ user }) => {
  return (
    <div>
      {/* <img src={user.photoURL} alt={user.displayName} /> */}
      <div>
        <h3>Welcome {user.displayName}</h3>
        {/* <p>{user.email}</p> */}
        <Button
          variant="contained"
          color="primary"
          mini
          onClick={() => auth.signOut()}
        >
          Sign Out
        </Button>
      </div>
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
