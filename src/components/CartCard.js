import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useContextHook } from '../context/FoodContext'
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



const CartCard = ({i}) => {
  const {cart,setCart} = useContextHook();
  return (
    <Box className="group" sx={{boxShadow:5,borderRadius:5}}>
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img src={i.strMealThumb} alt="items" className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <Stack direction="row" sx={{display:'flex',justifyContent:'space-between',p:1}}>
                <h1 className="mt-4 text-lg font-medium text-gray-900">{i.strMeal.substring(0, 18) + "...."}</h1>
                <Button sx={{color:'red',verticalAlign:'middle'}} onClick={()=> setCart(cart.filter(c => c.idMeal !== i.idMeal))}><FavoriteIcon /></Button> 
              </Stack>
              <div >
                <Link to={`/recipe/${i.idMeal}`} ><Button sx={{textTransform:'unset',color:'blueviolet',fontWeight:'bold'}} endIcon={<KeyboardDoubleArrowRightIcon />}>Check out</Button></Link>
              </div>
        </Box>
  )
}

export default CartCard