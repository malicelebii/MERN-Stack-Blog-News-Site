/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function OtherNews() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const [posts, setposts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/posts")
      .then((newPosts) => setposts(...posts, newPosts.data));
  }, []);

  const random = () =>{
    const x = Math.round(Math.random()*posts.length)
    if(x==0){
    return x;}
    else if(x==posts.length){return x-1;}
    else{return x;}
  }
  const numbers = [1,2,3,4,5]
  const randomIndex = numbers.map(number=>{
    const index = random();
    return   posts.length > 0  ? (
      <Typography className={classes.root}>
        <h3 style={{ textAlign: "center" }}>{posts[index].category}</h3>
        <Link href={`/news/${posts[index]._id}`} color="inherit">
          {
            posts[index].title
          }
        </Link>
        <hr />
      </Typography>
    ) : null
  })


  const otherNews = numbers.map((number) =>
    posts.length > 0  ? (
      <Typography className={classes.root}>
        <h3 style={{ textAlign: "center" }}>{posts[random()].category}</h3>
        <Link href="#" onClick={preventDefault} color="inherit">
          {
            posts[random()].title
          }
        </Link>
        <hr />
      </Typography>
    ) : null
  );
  return <>{randomIndex}
  {/* <h1>{random()}</h1>
  {posts.length} */}
 
  </>;
}
