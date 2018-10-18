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
    zIndex: theme.zIndex.drawer + 1,
    paddingTop: 10
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

  icon: {
    height: 60,
    paddingBottom: 10
  },

  title: {
    flexGrow: 1,
    paddingLeft: 10
  }
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

    const drawer = <NavBar />;
    return (
      <Fragment className={classes.container}>
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
              <Fragment>
                <img src={book} className={classes.icon} alt="Baby Book logo" />
              </Fragment>
              <Typography
                className={classes.title}
                component="h1"
                variant="h1"
                color="secondary"
                noWrap
              >
                BABY Book
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
