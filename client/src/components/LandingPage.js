import React from "react";
import LastNew from "../components/LastNew";
import OtherNews from "./OtherNews";
import LatestNews from "../components/LatestNews";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function LandingPage() {
  return (
    <Grid container spacing={1}>
      <Grid item md={9}>
        <LastNew />
      </Grid>
      <Grid item md={2}>
        <OtherNews />
      </Grid>
      <Grid item md={9}>
        <h3 style={{ textAlign: "center" }}>//LATEST NEWS//</h3>
        <Grid container md={12}>
          <Grid item md={4}>
            <LatestNews />
          </Grid>
          <Grid item md={4}>
            <LatestNews />
          </Grid>
          <Grid item md={4}>
            <LatestNews />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
