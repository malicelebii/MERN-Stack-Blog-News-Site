import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 700,
  },
}));

export default function LastNew(props) {
  const classes = useStyles();
  const styleLink = {
    color: "black",
    hover: "none",
  };
  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((newPosts) => setposts(...posts, newPosts.data));
  }, []);

  const postlariCagir = posts.map((post) => post.description); // kaybetme
  const stringValue ="The president canceled Republican National Convention events inFlorida and wore a face mask in public. But its too late."
  

  return (
    <div className={classes.root}>
      {posts.map(post=>(   
      <Link href={`/news/${post._id}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://img.huffingtonpost.com/asset/5f1cf9c2220000bd0f38797f.jpeg?cache=YeNgrD9xgo&ops=800_450&format=webp"
              title="Contemplative Reptile"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {" "}
                TRUMP’S COVID CATCHUP: TOO LITTLE, 4 MILLION CASES TOO LATE{" "}
                {posts.length > 0 ? posts[0].title : null}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {stringValue.split('\n',1)[0]}
                {posts.length > 0
                  ? ReactHtmlParser(posts[0].description)
                  : null}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      ))}
      postlar
      <button onClick={() => console.log(postlariCagir)}>cagir</button>
      {ReactHtmlParser(postlariCagir[5])}
      <button
        onClick={() =>
          (document.getElementById("asd").innerHTML = posts[0].title)
        }
      >
        {" "}
        göste r
      </button>
      <div id="asd">{/* {posts[0].title} */}</div>
    </div>
  );
}
