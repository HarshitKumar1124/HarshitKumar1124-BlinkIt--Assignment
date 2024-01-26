import {useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from "../../Assets/topic-5.png"
import {CopyToClipboard}  from 'react-copy-to-clipboard'
import { useSelector,useDispatch} from 'react-redux'
import {delBlog,ResetBlogState} from "../../Redux/ReduxActions/blogActions"
import { useNavigate } from 'react-router-dom';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'scale(1)' : 'scale(1.1)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));





export default function RecipeReviewCard({blogData}) {

  const dispatch = useDispatch()

  const Navigate = useNavigate()



  const [expanded, setExpanded] = useState(false);
  const [del,setDelete] = useState(false)


  const handleExpandClick = () => {

    //copied notification
    toast.success('Link Copied!')
    setExpanded(!expanded);
  };

  const {loading,isAuth,response:user} = useSelector((state)=>state.loadUser);



  const deleteBlog=()=>{

    console.log('deleting')
   
    dispatch(delBlog(blogData._id));
   
    
    
  }


  

  const ReadBlog=()=>{

    Navigate(`/view/blog/${blogData._id}`)

  }


  
const [pointer,setPointer] = useState(false)




  return (<>
    <Card sx={{ maxWidth: "20%" }}  style={{margin:"1rem",transform:pointer?"scale(1.02)":"scale(1)",transition:"all 0.5s ease"}} >
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {blogData.author[0]}
          </Avatar>
        }
        action={(isAuth && user && user._id===blogData.author_id)?<>
          <IconButton title="Delete blog" onMouseOver={()=>setDelete(true)} onMouseOut={()=>setDelete(false)} style={{backgroundColor:(del?'rgba(255,0,0,0.4)':"rgba(0,0,0,0.1)")}} >
          <DeleteIcon  style={{color:(del?'rgba(255,0,0)':"")}} onClick={deleteBlog} />
          </IconButton>
          </>:<></>
        }
        title={blogData.heading}
        subheader="September 14, 2016"
      />
      <CardMedia
        style={{cursor:(pointer)?"pointer":"" }}
        title={pointer?"Read this blog":""}
        onClick={ReadBlog} 
        onMouseOver={()=>setPointer(true)}
        onMouseOut={()=>setPointer(false)}
        component="img"
        height="130"
        image={Image}
        alt="Blog Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={{wordWrap:"break-word",maxHeight:"15vh",overflow:"hidden"}}>
        {blogData.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Like the blog">
          <FavoriteIcon />
        </IconButton>
      
        <CopyToClipboard text={window.location.origin + "/view/blog/"+blogData._id}   >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
         <ShareIcon />
        </ExpandMore>
        </CopyToClipboard>
      </CardActions>
    </Card>
    
    </>
  );
}
