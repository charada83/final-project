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
import { Link } from "@reach/router";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,

    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
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
        <div className={classes.toolbar} />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/*<Link to="login">Login</Link> */}
            <li>
              <Link to="dashboard">Dashboard</Link>
              <ul>
                <li>
                  <Link to="/dashboard/milestones">Milestones</Link>
                </li>
                <li>
                  <Link to="/dashboard/memories">Memories</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="family">Family</Link>
              <ul>
                <li>
                  <Link to="/family/invite">Invite</Link>
                </li>
                <li>
                  <Link to="/family/family-tree">Family Tree</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="absolute" className={classes.appBar}>
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
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Layout);
