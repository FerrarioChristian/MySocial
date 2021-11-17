import Share from "components/share/Share";
import React from "react";
import "./feed.css";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
      </div>
    </div>
  );
}
