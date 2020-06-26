import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Signout } from "../Authentication/authhelpers/authhelper";
const drawerWidth = 220;
import Portfolio from "./Admin-Components/Portfolio";
import ManagePortfolio from "./Admin-Components/Manage-Product";
import Product from "./Admin-Components/Product";
import ManageProduct from "./Admin-Components/Manage-Product";
import User from "./Admin-Components/User";
import ManageUser from "./Admin-Components/Manage-User";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //declaring some of the hooks
  const [portfolio, setPortfolio] = useState(true);
  const [managePortfolio, setManagePortfolio] = useState(false);
  const [product, setProduct] = useState(false);
  const [manageProduct, setManageProduct] = useState(false);
  const [user, setUser] = useState(false);
  const [manageUser, setManageUser] = useState(false);

  //functions to handle changes on nav bar click
  let handlePortfolio = (event) => {
    event.preventDefault();
    setPortfolio(true);
    setManagePortfolio(false);
    setProduct(false);
    setManageProduct(false);
    setUser(false);
    setManageUser(false);
  };

  let handleManagePortfolio = (event) => {
    event.preventDefault();
    setPortfolio(false);
    setManagePortfolio(true);
    setProduct(false);
    setManageProduct(false);
    setUser(false);
    setManageUser(false);
  };

  let handleProduct = (event) => {
    event.preventDefault();
    setPortfolio(false);
    setManagePortfolio(false);
    setProduct(true);
    setManageProduct(false);
    setUser(false);
    setManageUser(false);
  };

  let handleManageProduct = (event) => {
    event.preventDefault();
    setPortfolio(false);
    setManagePortfolio(false);
    setProduct(false);
    setManageProduct(true);
    setUser(false);
    setManageUser(false);
  };

  let handleUser = (event) => {
    event.preventDefault();
    setPortfolio(false);
    setManagePortfolio(false);
    setProduct(false);
    setManageProduct(false);
    setUser(true);
    setManageUser(false);
  };

  let handleManageUser = (event) => {
    event.preventDefault();
    setPortfolio(false);
    setManagePortfolio(false);
    setProduct(false);
    setManageProduct(false);
    setUser(false);
    setManageUser(true);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className="Tool_Bar">
        <span id="company">Control panel</span>
      </div>
      <Divider />
      <List>
        <ListItem button key="Portfolio">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem button key="Manage Portfolio">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Portfolio" />
        </ListItem>
        <ListItem button key="Products">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button key="Manage Products">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Products" />
        </ListItem>
        <ListItem button key="Users">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button key="Manage Users">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Users" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Home">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button key="Logout">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{
          backgroundColor: "#10A881",
          textTransform: "uppercase",
          letterSpacing: "3px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <span id="heading">Welcome To Admin Dashboard</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <h1>Content</h1>
        </div>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
