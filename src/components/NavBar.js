import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <MenuIcon />
          <Typography variant="title" color="inherit">
            Baby Book
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
