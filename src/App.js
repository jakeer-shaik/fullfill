
import { Divider } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import FoodContextProvider from './context/FoodContext'
import About from './pages/About'
import AlphabaticFood from './components/AlphabaticFood'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Special from './pages/Special'
import Search from './pages/Search'
import Categories from './pages/Categories'
// import FoodSearch from './components/FoodSearch'


const App = () => {
  return (
    <FoodContextProvider>
    
        <Navbar />
        <Divider />
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/foodsearch' element={<FoodSearch />} /> */}
            <Route path='/recipe/:idMeal' element={<Recipe />} />
            <Route path='/special' element={<Special />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/alphabetic' element={<AlphabaticFood />} />
            <Route path='/category' element={<Categories />} />
            <Route path='/search' element={<Search />} />
        </Routes>
    
    </FoodContextProvider>
  )
}

export default App