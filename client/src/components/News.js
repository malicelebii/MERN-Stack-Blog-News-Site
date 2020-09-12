import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from '@material-ui/core/CssBaseline';
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import axios from "axios";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "10px 0px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  link: {
    color: "black",
  },
}));

export default function News() {
  const classes = useStyles();
  const theme = useTheme();
  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((data) => setposts(data.data))
      .catch((err) => console.log(err));
  }, []);

  const postlar = posts.map((post) =>
    posts.length > 0 ? (
      <React.Fragment>
        <Container maxWidth="sm">
          <CssBaseline />
          <Typography
            component="div"
          
          />
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={post.kapakImageUrl}
              title={post.title}
            />

            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Link href="/#" className={classes.link}>
                  <Typography component="h5" variant="h5">
                    {post.category}
                  </Typography>
                </Link>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.title}
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Container>
      </React.Fragment>
    ) : null
  );

  return (
    <div>
  
        <Typography component="h3" variant="h3">
          Latest News --------------------------
        </Typography>
        {postlar}
 
    </div>
  );
}
