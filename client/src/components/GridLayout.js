import React,{useState,useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };


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

      function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={4}>
              {latestNews}
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>
          </React.Fragment>
        );
      }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
