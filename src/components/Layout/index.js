import React, { Component, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  CssBaseline
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import book from "../../book.svg";
import NavBar from "./NavBar";
import Footer from "./Footer";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,

    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%",
    flexDirection: "column"
  },
  grow: {
    flexGrow: 1
  },

  appBar: {
    backgroundColor: "primary",
    zIndex: theme.zIndex.drawer + 1
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
    // marginRight: drawerWidth,
    // [theme.breakpoints.up("md")]: {
    //   width: `calc(100% - ${drawerWidth}px)`
    // }
  },
  button: {}
});

class Layout extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, children } = this.props;
    const { mobileOpen } = this.state;

    const drawer = (
      <div>
        <NavBar />
      </div>
    );
    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="relative" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <Menu />
              </IconButton>
              <Typography
                className={classes.grow}
                variant="title"
                color="inherit"
                noWrap
              >
                <img src={book} height="50" alt="Baby Book logo" /> BABY Book
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <div style={{ display: "flex" }}>
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper
                }}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
              <Drawer
                variant="permanent"
                open
                classes={{
                  paper: classes.drawerPaper
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <main className={classes.content}>{children}</main>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default withStyles(styles)(Layout);
