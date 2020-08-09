import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouteMatch, Route } from 'react-router-dom';

function PostPage(props) {
  const [post, setpost] = useState([]);
  const match = useRouteMatch();
  const asdasd = `/api${match.url}`
  const p = props.match.params.id
  useEffect(() => {
    axios.get(`http://localhost:5000/api/news/${p}`)
    // console.log(`/api${match.url}`)
  }, []);

  return (
    <div>
      asd
      1--
      {asdasd}--
      {p}
      {`http://localhost:5000/api/news/${p}`}
      {post.length > 0 ? post.data[0].title : null}
    </div>
  );
}

export default PostPage;
