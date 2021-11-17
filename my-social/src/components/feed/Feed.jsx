import Post from "components/post/Post";
import Share from "components/share/Share";
import { Posts } from "dummyData";
import React from "react";
import "./feed.css";

export default function Feed() {
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
