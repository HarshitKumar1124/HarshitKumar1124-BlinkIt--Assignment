import React from "react";
import "./PostLayout.scss"
import DP from "../../Assets/recent-post-1.jpg"
import { Button } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Post = () => {
  return (
    <div className="post">
      <img src={DP}/>
      <div>
        <h3><Button>See more</Button></h3>
        <h2>Helpful Tips for Working from Home as a Freelancer</h2>
        <p>
          Gosh jaguar ostrich quail one excited dear hello and bound and the and
          bland moral misheard roadrunner flapped lynx far that and jeepers
          giggled far and far
        </p>
        <p style={{ justifyItems:"flex-end",display:"flex",justifyContent:"flex-end",alignItems:"center"}}><AccessTimeIcon/> 3 minutes ago</p>
      </div>
    </div>
  );
};

export default Post;
