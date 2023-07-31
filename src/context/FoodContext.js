import React,{createContext,useContext,useEffect, useState} from 'react'

const Context = createContext({});
export const API =`https://www.themealdb.com/api/json/v1/1`
const FoodContextProvider = (props) => {
    // console.log(props)
    const [search,setSearch] = useState("chicken");
    const [alpha,setAlpha] = useState([])
    const [food,setFood] = useState([]);
    const [random,setRandom] = useState({});
    const [singleFood,setSingleFood] = useState({})
    const [cart,setCart] = useState([]);
    const [loading,setLoading] = useState(false);
    const [menu,setMenu] = useState([])
    const getData = async(url) =>{
        try {
            setLoading(true)
            await fetch(url)
            .then(res => res.json())
            .then(result => setFood(result.meals))
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    const getSingleData = async(url)=>{
        try {
            setLoading(true)
            await fetch(url)
            .then(res => res.json())
            .then(result => setSingleFood(result.meals))
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }
    const getRandomFood = async(url) => {
        try {
            setLoading(true)
            await fetch(url)
            .then(res => res.json())
            .then(result => setRandom(result.meals))
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    // const getCategoryData = async(url) => {
    //     try {
    //         await fetch(url)
    //         .then(res => res.json())
    //         .then(result => setCategory(result.categories));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    const getCategoryMenu = async(url) => {
        try {
            setLoading(true)
            await fetch(url)
            .then(res => res.json())
            .then(result => setMenu(result.meals))
            setLoading(false)
        } catch (error) {
           console.log(error); 
        }
      }
      const getAlphabaticFood = async(url) =>{
        try {
            setLoading(true)
            await fetch(url)
            .then(r => r.json())
            .then(re => setAlpha(re.meals))
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        let timer = setTimeout(()=>{
            getData(`${API}/search.php?s=${search}`)
        },1000)
        return () => clearTimeout(timer)
    },[search])

  return (
    <Context.Provider value={{search,setSearch,food,getSingleData,singleFood,getRandomFood,random,cart,setCart,getCategoryMenu,menu,setMenu,alpha,getAlphabaticFood,setAlpha,loading,setLoading}}>
        {props && props.children}
    </Context.Provider>
  )
}

export default FoodContextProvider

export const useContextHook =() =>{
    return useContext(Context)
}
