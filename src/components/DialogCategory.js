import * as React from 'react';
import Grid from '@mui/material/Grid';
import {   Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';

const DialogCategory = ({item}) => {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      

  return (
        <>
        <Box onClick={handleClickOpen}>
            <Grid key={item.idCategory} sx={{borderRadius:'50%',textAlign:'center'}} item>
              <Box sx={{m:2,height: 140,width: 140,borderRadius:'50%',justifyContent:'center',boxShadow:2,borderWidth:'2px',borderColor:' #185a9d'}}>
                <img style={{height: 140,width:140,borderRadius:'50%'}} src={item.strCategoryThumb} alt="category" />
              </Box>
                <Typography component='div'>{item.strCategory}</Typography>
            </Grid>
        </Box>
                <Dialog open={open} onClose={handleClose} >
                <DialogTitle><Typography variant='h6'>Category Overview</Typography></DialogTitle>
                <DialogContent>
                    <DialogContentText><Typography variant='h5' >{item.strCategory}</Typography></DialogContentText>
                    <img src={item.strCategoryThumb}  style={{height:200,width:200,borderRadius:'none'}} alt="category" />
                    <Typography component="div1"> {item.strCategoryDescription} </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
  );
} 
export default DialogCategory
