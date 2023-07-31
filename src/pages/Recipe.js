
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SingleProductCard from '../components/SingleProductCard';
import { useContextHook } from '../context/FoodContext';
import { API } from '../context/FoodContext';


const Recipe = () => {
  const {getSingleData,singleFood} = useContextHook()
  const { idMeal } = useParams();
  useEffect(()=>{
    getSingleData(`${API}/lookup.php?i=${idMeal}`)
  },[])
  return (
    <>
    {
      singleFood && singleFood.length ? singleFood.map((item)=>{
        return(
          <SingleProductCard item={item} key={item.idMeal} /> 
          
        )
      })  : null
    }
      
    </>
  )
}

export default Recipe