import React, { Component, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Drawer,
  CssBaseline
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CurrentUser from "../auth/CurrentUser";
import TitleLogo from "./TitleLogo";
import { auth } from "../../firebase";
import "../../print.css";

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
    zIndex: theme.zIndex.drawer + 1,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10
  },
  logo: {
    flexGrow: 1,
    paddingLeft: 10
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    minHeight: "100vh",
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minHeight: "100vh",
    textAlign: "center"
  }
});

class Layout extends Component {
  state = {
    mobileOpen: false,
    currentUser: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
    });
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, children } = this.props;
    const { mobileOpen, currentUser } = this.state;
    const drawer = <NavBar />;

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="relative" className={classes.appBar} id="dontPrint">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <Menu />
              </IconButton>
              <TitleLogo className={classes.logo} />
              {/* <Button color="secondary">Login</Button> */}
              {currentUser && (
                <div>
                  <CurrentUser user={currentUser} />
                </div>
              )}
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
