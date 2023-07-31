import React from 'react'
import { useNavigate } from 'react-router-dom'


const SingleProductCard = ({item}) => {
  const navigate = useNavigate()

    
  return (
   <>
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">{item.strMeal}</h2>
      <img
        src={item.strMealThumb}
        alt={item.strMeal}
        className="w-full h-auto rounded-lg shadow-lg mb-6"
      />
      <h4 className='text-2xl font-bold'>Procedure:</h4>
      <p className="text-lg text-gray-800 leading-relaxed mb-5">{item.strInstructions}</p>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Area : <span className='text-red-600'>{item.strArea}</span></h3>
        <h3 className='text-xl font-bold mb-2'>Category : <span className='text-red-600'>{item.strCategory}</span></h3>
        <h3 className='text-xl font-bold mb-2'>Tags : <span className='text-red-600'>{item.strTags}</span></h3>
      </div>
      <div className='text-center'>
        <h3 className='text-2xl font-bold m-3'>You can find recipe in <span className='text-red-700'>YouTube</span>. just go and check it out.</h3>
        <button  className="animate-button inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transform transition-transform hover:scale-110 active:scale-95"><a href={item.strYoutube} target="_blank">watch now</a></button>
      </div>
      <div className='text-center p-5'>
        <button onClick={()=>navigate(-1)} className='animated-button inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out'>go back</button>
      </div>
    </div>
   </>
  )
}

export default SingleProductCard


