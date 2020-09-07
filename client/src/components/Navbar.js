import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "../components/Menu";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Link from "@material-ui/core/Link";
import Search from "../components/Search";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  // toolbar: {
  //   minHeight: 128,
  //   alignItems: "flex-start",
  //   paddingTop: theme.spacing(1),
  //   paddingBottom: theme.spacing(2),
  // },
  // title: {
  //   flexGrow: 1,
  //   alignSelf: "flex-end",
  // },
}));

const Navbar = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  const styleLink = {
    paddingLeft: "20px",
    justifyContent: "center",
  };

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "black" }} position="sticky">
        <Box display="flex" justifyContent="flex-start">
          <Box p={1}>
            <Box p={1}>
              <Menu />
            </Box>
            <Box p={1}>
              <Search />
            </Box>
          </Box>
          <Box display="flex" justifyContent="end" marginLeft="auto">
            <Box p={1}>
              <IconButton
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <Link href="/login" color="inherit">
                  Log In
                </Link>
                <MoreIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box justifyContent="center" display="flex">
          <a href="/">
            <img
              src="https://www.underconsideration.com/brandnew/archives/huffpost_logo.png"
              style={{ height: "50px" }}
            />
          </a>
        </Box>

        <Typography className={classes.title} variant="h8" noWrap>
          <Grid
            container
            style={{ marginBottom: "20px", justifyContent: "center" }}
          >
            <Link href="/news" style={styleLink} color="inherit">
              NEWs
            </Link>
            <Link href="/coronavirus" style={styleLink} color="inherit">
              CORONAVIRUS
            </Link>
            <Link href="/news/politics" style={styleLink} color="inherit">
              POLITICS
            </Link>
            <Link href="/elections" style={styleLink} color="inherit">
              2020 ELECTIONS
            </Link>
            <Link href="/entertainment" style={styleLink} color="inherit">
              ENTERTAINMENT
            </Link>
            <Link href="/life" style={styleLink} color="inherit">
              LIFE
            </Link>
            <Link href="/personal" style={styleLink} color="inherit">
              PERSONAL
            </Link>
            <Link href="/video" style={styleLink} color="inherit">
              VIDEO
            </Link>
            <Link href="/shopping" style={styleLink} color="inherit">
              SHOPPING
            </Link>
          </Grid>
        </Typography>
      </AppBar>
    </div>
  );
};

export default Navbar;
