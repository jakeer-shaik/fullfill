import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import CartCard from '../components/CartCard';
import { useContextHook } from '../context/FoodContext'

const Cart = () => {
    const {cart} = useContextHook();
    const navigate = useNavigate();
  return (
    <> 
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <Stack direction="row" justifyContent="space-between" sx={{mb:2}}>
                <Typography variant='h5'>Its your Wishlist....</Typography>
                <Button variant='contained' onClick={()=>navigate(-1)}>go back</Button>   
            </Stack>  
                <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                    cart && cart.length ? cart.map((i)=>{
                        return(
                            <CartCard  i={i} key={i.idMeal}/>
                        )
                    }) : <Box><Typography>your cart is empty</Typography></Box>
                }
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart