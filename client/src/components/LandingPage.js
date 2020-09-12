import React from "react";
import LastNew from "../components/LastNew";
import OtherNews from "./OtherNews";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import LatestNews from "../components/LatestNews";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(5),
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <Grid container spacing={1}>
        <Grid item md={9}>
          <LastNew />
        </Grid>
        <Grid item md={2}>
          <OtherNews />
        </Grid>
      </Grid>
      <Grid item md={9} >
        <Grid container justifyContent="center">
          <LatestNews />
        </Grid>
      </Grid>
      {/* <h3 style={{ textAlign: "center" }}>//LATEST NEWS//</h3> */}
    </Typography>
  );
}

export default LandingPage;
