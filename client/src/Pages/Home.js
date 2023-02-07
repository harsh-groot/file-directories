import { Typography } from "@mui/material";
import FileList from "../Components/FileList";
import React from "react";
import FileUpload from "../Components/FileUpload";
import { Link } from "react-router-dom";


function Home(props) {
  return (
    window.localStorage.getItem("token") ? <div>
      <Typography gutterBottom variant="h3" component="div">
        File Directories
      </Typography>
      <FileUpload />
      <FileList />
    </div> :
    <div>Please login first. <Link to={"/"}>Login</Link></div>
  );
}

export default Home;
