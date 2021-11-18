import Feed from "components/feed/Feed";
import Topbar from "components/topbar/Topbar";
import Rightbar from "components/rightbar/Rightbar";
import Sidebar from "components/sidebar/Sidebar";
import React from "react";
import "./home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar profile={false} />
      </div>
    </>
  );
}
