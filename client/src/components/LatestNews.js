import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";

import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: 245,
    height: 300,
    marginRight:40,
    marginTop:20,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  media: {
    height: 120,
  },
});

export default function LatestNews() {
  const classes = useStyles();

  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((newPosts) => setposts(...posts, newPosts.data));
  }, []);

  const postNumbers = [2, 3, 4, 5, 6, 7];

  const latestNews =
    posts.length > 0
      ? postNumbers.map((number) => (
          <Link href={`/news/${posts[posts.length - number]._id}`}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={posts[posts.length - number].kapakImageUrl}
                  title={posts[posts.length - number].title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {posts[posts.length - number].category}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {posts[posts.length - number].title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))
      : null;

  return <>{latestNews}</>;
}
