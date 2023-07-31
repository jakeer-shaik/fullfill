import React from 'react'
import  { useContextHook } from '../context/FoodContext'
import FoodCard from './FoodCard'

const FoodList = () => {
    const {food} = useContextHook();
  return (
    <>
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                    <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    { 
                        food && food.length ?
                            food.map((items)=>{
                                return(
                                    <FoodCard items={items} key={items.idMeal} />
                                )
                            }) : null 
                    } 
                </div>
            </div>
        </div>
    </>
  )
}

export default FoodList