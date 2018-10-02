import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

// class NavBar extends React.Component {
//   state = {
//     open: false
//   };

//   handleDrawerOpen = () => {
//     this.setState({ open: true });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const drawerStyle = {
//       width: "240px",
//       margin: "10px"
//     };

//     return (
//       <div>
//         <AppBar>
//           <Toolbar>
//             <IconButton
//               onClick={this.handleDrawerOpen}
//               color="inherit"
//               aria-label="Menu"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="title" color="inherit">
//               Baby Book
//             </Typography>
//             <Button color="inherit">Login</Button>
//           </Toolbar>
//         </AppBar>
//         <Drawer style={drawerStyle} variant="temporary" open={this.state.open}>
//           <div>
//             <IconButton onClick={this.handleDrawerClose}>
//               <ChevronLeftIcon />
//             </IconButton>
//           </div>
//           <Divider />
//           <List>List of items</List>
//           <Divider />
//           <List>List of Items</List>
//         </Drawer>
//       </div>
//     );
//   }
// }

//export default NavBar;

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Baby Book
          </Typography>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
