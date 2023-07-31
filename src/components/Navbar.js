import { Avatar, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';


const Navbar = () => {
  const navigate = useNavigate();
  const [show,setShow] = useState(false);
  const handlershow = (e)=>{
    setShow(current => !current) 
  }
  return (
    <div>
        <nav className='sticky'>
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
       
        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={handlershow}>
          <span className="sr-only">Open main menu</span>
          
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <Link to="/"><Typography variant='h4' sx={{color:'black',fontFamily:'Roboto Mono'}}>FullFill</Typography></Link>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            
            <Link to="/" className="text-black-300  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-md font-medium " >Home</Link>
            <Link to="/search" className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Search</Link>
            <Link to="/alphabetic" className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Alphabets</Link>
            <Link to="/cart" className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Wishlist</Link>
            <Link to="/special" className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Special</Link>

          </div>
        </div>
      </div>
        <div className='text-center mr-8 text-red-500' onClick={()=> navigate('/cart')}><FavoriteIcon /></div>
        <div><Avatar src="/broken-image.jpg" /></div>
      </div>
    </div>

  {
    show && <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pt-2 pb-3">                  
                  <Link to="/" className="bg-gray-300 text-black block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</Link>
                  <Link to="/search" className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Search</Link>
                  <Link to='/alphabetic' className='text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium'>Alphabets</Link>
                  <Link to="/special" className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Special</Link>
                  <Link to="/cart" className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Wishlist</Link>
                </div>
              </div>
  }
</nav>

    </div>
  )
}

export default Navbar