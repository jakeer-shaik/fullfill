import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CategoryMenu from '../components/CategoryMenu';
import DialogCategory from '../components/DialogCategory';
import category from '../category.json'
import CategoryMenuList from '../components/CategoryMenuLIst';
import Loading from '../components/Loading';

const ShowCategory = () => {
    const [isLoading,setIsLoading]=useState(true); 
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        },3000); 
      }, []);
  return (
    <>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',mt:2}}>
            <CategoryMenu />
            {
                 category.length ?
                        <Box sx={{m:1,display:'flex',justifyContent:'center',minWidth:'50vw'}}>
                               <div className="flex flex-row overflow-x-scroll align-middle scrollbar-hide">
                                   {
                                       category.map((item)=>{
                                           return(
                                           <DialogCategory item={item} key={item.idCategory}/>
                                           )
                                       }) 
                                   } 
                               </div>
                        </Box> 
                        :null 
            }
            
            </Box>
            {isLoading ? <Loading /> : <CategoryMenuList />}
        
    </>
  )
}

export default ShowCategory

