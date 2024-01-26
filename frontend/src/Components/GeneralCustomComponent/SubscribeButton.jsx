import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";



const SubscribeButton = styled(Button)(({ theme }) => ({
    background:"linear-gradient(90deg, #0ea5ea, #0bd1d1 100%, #0ea5ea) center",
    transform:"scale(1)",
    '&:hover':{

     
      transform:"scale(1.05)",
      background:"linear-gradient(90deg, #0ea5ea, #0bd1d1 100%, #0ea5ea) top"
     

    },
    textAlign: 'center',
    color: "white",
    fontWeight:"bold",
    transition : "all 0.5s ease"
    
   
    
  }));

  export default SubscribeButton