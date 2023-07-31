import { Box, Button, Stack } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { useContextHook } from '../context/FoodContext';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AlphabetList = ({items}) => {
    const {strArea,strCategory,strMeal,strMealThumb,idMeal} = items;
    const { cart,setCart } = useContextHook();
  return (
    <div>
        <Box className="group" sx={{boxShadow:5,borderRadius:5}}>
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img src={strMealThumb} alt="items" className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <Stack direction="row" sx={{display:'flex',justifyContent:'space-between',p:1}}>
                <h1 className="mt-4 text-lg font-medium text-gray-900">{strMeal.substring(0, 18) + ".." }</h1>
                {
                  cart.includes(items) ?
                  <Button sx={{color:'red',verticalAlign:'middle'}} onClick={()=> setCart(cart.filter(c => c.idMeal !== items.idMeal))}><FavoriteIcon /></Button> :
                  <Button sx={{color:'black',verticalAlign:'middle'}} onClick={()=>setCart([...cart,items])} title="add to wishlist"><FavoriteBorderOutlinedIcon /></Button> 
                }
            </Stack>
                <h3 className=" ml-3 text-md p-1 text-gray-900" >{strCategory}</h3>
              <Stack direction="row" sx={{display:'flex',justifyContent:'space-between',p:1}}>
                <h3 className=" ml-3 text-md p-1 text-gray-900">#{strArea}</h3>
                <Link to={`/recipe/${idMeal}`} ><Button variant='text'><KeyboardDoubleArrowRightIcon /></Button></Link>
              </Stack>
        </Box>
    </div>
  )
}

export default AlphabetList