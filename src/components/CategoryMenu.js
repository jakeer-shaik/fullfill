import * as React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select,{SelectChangeEvent} from '@mui/material/Select';
import { API, useContextHook } from '../context/FoodContext';
import { Typography } from '@mui/material';

const CategoryMenu=()=> {
    const {menu,setMenu,getCategoryMenu} = useContextHook()
    const [itemMenu,setItemMenu] = useState("chicken")
    const [open, setOpen] = React.useState(false);
    

  const handleChange =  (event) => {
    setMenu(event.target.value)
  }
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(()=>{
    getCategoryMenu(`${API}/filter.php?c=${itemMenu}`)
  },[itemMenu]);

  const categoryItems = ["Beef","Breakfast","Chicken","Dessert","Goat","Lamb","Miscellaneous","Pasta","Pork","Seafood","Side","Starter","Vegan","Vegetarian"];
  return (
    <Box sx={{ minWidth: 200,display:'flex',alignItems:'center',flexDirection:'column',textAlign:'center' }}>
      <Typography variant='h3' sx={{m:2,fontWeight:'bold'}}>Explore Our <span className='text-red-600'>Categories</span></Typography>
      <FormControl  sx={{width:{lg:"50%",md:"50%",xs:'50%'}}}>
        <InputLabel id="demo-controlled-open-select-label">select</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={menu}
          label="Age"
          onChange={handleChange}
        >
            {
                categoryItems.map((im,ind) => {
                    return(
                        <Box key={ind}>
                            <MenuItem value={im}  onClick={()=> setItemMenu(im)}>{im}</MenuItem>
                        </Box>
                        
                    )
                })
            }
        </Select>
      </FormControl>
    </Box>
  );
}
export default CategoryMenu