import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Box, Button, Stack, Typography } from '@mui/material'
import { useContextHook } from '../context/FoodContext';
import { Link } from 'react-router-dom';

const CategoryMenuCard = ({items}) => {
    const {cart,setCart} = useContextHook()
  return (
    <div>
        <Box className="group" sx={{boxShadow:5,borderRadius:5}}>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img src={items.strMealThumb} alt="items" className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
             <Stack direction="row" sx={{display:'flex',justifyContent:'space-between',p:1}}>
                <h1 className="mt-4 text-lg font-medium text-gray-900">{items.strMeal.substring(0, 18) + ".." }</h1>
                    {
                         cart.includes(items) ?
                            <Button sx={{color:'red',verticalAlign:'middle'}} onClick={()=> setCart(cart.filter(c => c.idMeal !== items.idMeal))}><FavoriteIcon /></Button> :
                            <Button sx={{color:'black',verticalAlign:'middle'}} onClick={()=>setCart([...cart,items])} title="add to wishlist"><FavoriteBorderOutlinedIcon /></Button> 
                    }
            </Stack>
            <Stack direction="row" sx={{display:'flex',justifyContent:'flex-end',p:1}}>
                <Link to={`/recipe/${items.idMeal}`} ><Typography>check out <KeyboardDoubleArrowRightIcon /></Typography></Link>
            </Stack>
        </Box>
             
    </div>
  )
}

export default CategoryMenuCard