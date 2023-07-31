import {  Stack, Typography } from '@mui/material';
import React, { useEffect,useState } from 'react'
import { API, useContextHook } from '../context/FoodContext' 
import { Box } from '@mui/system';
import AlphabetList from './AlphabetList';
import Loading from './Loading';

const AlphabaticFood = () => {
    const {alpha,getAlphabaticFood} = useContextHook();
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let num=0;
   
    const [letter,setLetter] = useState('A');
    const [isLoading,setIsLoading]=useState(true);
    useEffect(() => {
         
      }, []);
    
    useEffect(()=>{
        getAlphabaticFood(`${API}/search.php?f=${letter}`)
        setTimeout(() => {
            setIsLoading(false);
          },3000);
    })
  return (
   <>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center'}}>
            <Typography variant='h5' sx={{mt:5}}>You can search any food items alphabetically</Typography>
            <Stack key={num+1} direction="row" spacing={3} flexWrap="wrap" justifyContent="center" sx={{width:{md:'75%',sm:'95%'}}} m={2}>
                    {
                        alphabet.map((alp)=>{
                            return(
                                <Box key={num+1} sx={{width:20,textAlign:'center'}} >
                                    <Typography sx={{cursor:'pointer',boxShadow:2,m:.1}} onClick={()=>{setLetter(alp)}}>{alp}</Typography>
                                </Box>
                            )
                        })
                    }
            </Stack>
            <Typography variant='h5'>Here is an example by clicking an alphabet <span className=' text-red-600'>A</span></Typography>
        </Box>
     {isLoading ? <Loading /> : 
          <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {
                      alpha && alpha.length ?  alpha.map((items)=>{
                          return(
                              <AlphabetList items={items} key={items.idMeal} />
                          )
                      }) : null
                  }
              </div>
          </div>
      </div>
     }
   </> 
  )
}

export default AlphabaticFood