import React, { useState, useEffect } from "react";
import axios from "axios";

function Corona() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((posts) => setposts(posts.data))
      .catch((err) => console.log(err));
  }, []);

  const coronaPosts = posts.filter((post) => {
    return post.category == "Corona";
  });

  return (
    <div>
      <video
        src="https://big.assets.huffingtonpost.com/athena/files/2020/04/01/5e84eda1c5b6f55ebf473553.mp4"
        type="video/mp4"
        autoPlay
        loop
      ></video>

      {posts.length > 0 ? coronaPosts.map((post) => post.title) : null}

      
{/*       
      {posts.length > 0 ? posts.map(post=>`-${post.title}-`) : null} */}
      



    </div>
  );
}

export default Corona;
