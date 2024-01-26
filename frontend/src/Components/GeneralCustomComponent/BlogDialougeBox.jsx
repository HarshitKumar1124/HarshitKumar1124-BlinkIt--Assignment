import react,{useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate} from 'react-router-dom';
import { createBlog,ResetBlogState } from '../../Redux/ReduxActions/blogActions';
import {useSelector,useDispatch} from 'react-redux'




import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';



import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';


import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
 'Fashion',
 'Food Blog',
 'News Blog',
 'Personal Blog',
 'Adventure',
 'Travel',
 'Mystery',
 'Technology',
 'Science',
 'General / Random'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function FormDialog() {
  const [open, setOpen] = useState(true);
  const Navigate = useNavigate()
  const dispatch = useDispatch()

  const {loading,created,response} = useSelector((state)=>state.createBlog)

const [heading,setheading] = useState("")
const [text,settext] = useState("")

const Onchangeheading=(e)=>{

   setheading(e.target.value)

}

const Onchangetext=(e)=>{

    settext(e.target.value)
 
 }


  const handleClose = () => {
    setOpen(false);
    Navigate('/blogstore')
  };

  const Submit  = ()=>{
    
    // console.log({heading,text})
    dispatch(createBlog({heading,text,category:personName}))
    
  }

  useEffect(() => {
   
    if(created)
    {
      
      toast.success(response.message)
      dispatch(ResetBlogState())
      Navigate('/blogstore')
    }
    else if(created==false)
    toast.error(`Unable to create Blog due to ${response}`)

  }, [created])
  

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: black;
    background:white;
    border: 2px solid black;
   };

    &:hover {
      border-color: dodgerblue;
    }

    &:focus {
      border-color: dodgerblue;
      box-shadow: 0 0 0 3px dodgerblue;
    }

  `,
  );


  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        
       
      >
        <DialogTitle style={{backgroundColor:"black"}}>Create Blog</ DialogTitle>
        <DialogContent >
        <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="heading"
            label="Type your Heading here"
            type="text"
            fullWidth
            variant="standard"
            onChange={Onchangeheading}
            value={heading}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="content"
            name="text"
            label="Type your content here"
            type="text"
            fullWidth
            variant="standard"
            onChange={Onchangetext}
            value={text}
          />

<div>
      <FormControl sx={{ m: 1, width: "100%"}}>
        <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={Submit}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}