import React, { useEffect } from 'react'
import SingleProductCard from '../components/SingleProductCard';
import { API, useContextHook } from '../context/FoodContext'

const Special = () => {
  const { getRandomFood,random } = useContextHook();
  useEffect(()=>{
    getRandomFood(`${API}/random.php`)
  },[])
  console.log(random);
  return (
    <div>
      {
        random && random.length ?
        <div>
          {
            random.map((item)=>{
              return(
                <SingleProductCard  item={item}/>
              )
            })
          }
        </div> : null
      }
    </div>
  )
}

export default Special