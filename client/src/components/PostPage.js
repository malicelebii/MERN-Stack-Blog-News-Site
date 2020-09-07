import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouteMatch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ReactHtmlParser from 'react-html-parser'

function PostPage(props) {
  const [post, setpost] = useState("");
  const match = useRouteMatch();
  const p = props.match.params.id;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/news/${p}`)
      .then((data) => setpost(data.data));
  }, []);

  return (
    <div>
      <Container maxWidth="sm" style={{justifyContent:'center'}}>
        <Typography component="div" >
          <h2>{post.title}</h2>
          {ReactHtmlParser(post.description)}
        </Typography>
      </Container>
    </div>
  );
}

export default PostPage;
