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
        <h2>Random Heading is given here</h2>
        <p>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, sunt doloribus. Ipsam laudantium inventore exercitationem perferendis omnis maxime doloribus ab officia atque fugit. Fugiat eius, mollitia corporis a quibusdam fugit.
        </p>
        <p style={{ justifyItems:"flex-end",display:"flex",justifyContent:"flex-end",alignItems:"center"}}><AccessTimeIcon/> 3 minutes ago</p>
      </div>
    </div>
  );
};

export default Post;
