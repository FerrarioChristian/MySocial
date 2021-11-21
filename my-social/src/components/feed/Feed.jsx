import Post from "components/post/Post";
import Share from "components/share/Share";
import React from "react";
import { useState, useEffect } from "react";
import "./feed.css";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      const res = axios.get("posts/timeline/6188614c53e76899d7fd8779");
      console.log(res);
    };
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
