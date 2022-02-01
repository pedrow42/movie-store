import { useState, useEffect } from "react"
import './App.css'

//components
import {MoviesType} from './types/movieType'
import { HeaderWrapper, HeaderContainer } from "./components/Header/Header.style";
import CardItem from "./components/CardItem/CardItem";
import SearchBox from "./components/SearchBox/SearchBox";
import { MainContainer, GridContainer } from "./components/Container/Container";
import { CartIcon, ShoppingCart, HeartIcon } from "./components/CartIcon/CartIcon";
import Cart from "./components/Cart/Cart";
import ScrollPage from './components/Scroll/ScrollPage'
import FavCart from "./components/FavCart/FavCart";
import Footer from "./components/Footer/Footer";
//components

import { api } from "./api";
import { Drawer, LinearProgress } from "@mui/material"
import Badge from "@mui/material/Badge"


function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [cartItems, setCartItems] = useState<MoviesType[]>([]);
  const [favItems, setFavItems] = useState<MoviesType[]>([]);
  const [movies, setMovies] = useState<MoviesType[]>([])

  const getTotalItems = (items: MoviesType[])=>{
    return items.reduce((ack: number, item) => ack+item.count, 0);
  }

  const getTotalFavItems = (items: MoviesType[])=>{
    return items.reduce((ack: number, item) => ack+item.count, 0);
  }

  //favorites cart
  const handleAddFavorite = (clickedItem: MoviesType) => {
    setFavItems(prev =>{
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if(isItemInCart){
        return prev
      }
      /*if(isItemInCart){
        return prev.map(item=>
          item.id === clickedItem.id
            ?{...item}
            : item 
        )
      }*/
      return [...prev, {...clickedItem, count: 1}];
    })

  }

  const removeFromFavorites = (id: number) =>{
    const remove = favItems.filter((item) => item.id != id)
    setFavItems(remove)
  }
  //favorites cart

  //cart
  const removeFromCart = (id: number) =>{
    const remove = cartItems.filter((item) => item.id != id)
    setCartItems(remove)
  }

  const handleAddToCart = (clickedItem: MoviesType)=>{
    setCartItems(prev =>{
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if(isItemInCart){
        return prev
      }
      return [...prev, {...clickedItem, count: 1}];
    })
  }
  //cart

  //loadPage
  useEffect(()=>{
    loadMovies()
  }, [])
  const loadMovies = async ()=>{
    let json = await api.getAllMovies()
    setMovies(json)
    setLoading(false)
  }
  if(loading){
    return <LinearProgress/>
  }
  //loadPage

  return (
    <div>
      <HeaderWrapper>
        <HeaderContainer>
          <h1>LOGO</h1>

          <Drawer anchor="right" open={cartOpen} onClose={()=> setCartOpen(false)}>
            <Cart 
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              closeModal={()=>setCartOpen(false)}
            />
          </Drawer>

          <Drawer anchor="right" open={favOpen} onClose={()=> setFavOpen(false)}>
            <FavCart 
              cartItems={favItems}
              removeFromFavorites={removeFromFavorites}  
              handleAddToCart={handleAddToCart}
              closeModal={()=>setFavOpen(false)}   
            />
          </Drawer>
          <SearchBox/>
          <div>
            <CartIcon onClick={()=> setFavOpen(true)}>
              <Badge badgeContent={getTotalFavItems(favItems)} color="error">
                <HeartIcon/>
              </Badge>     
            </CartIcon>
            <CartIcon onClick={()=>setCartOpen(true)}>
              <Badge badgeContent={getTotalItems(cartItems)} color="error">
                <ShoppingCart />
              </Badge>  
            </CartIcon>
          </div>
        </HeaderContainer>
      </HeaderWrapper>

      <MainContainer>
        <GridContainer>
          {movies?.map(item =>(
              <CardItem item={item} handleAddToCart={handleAddToCart} handleAddFavorite={handleAddFavorite} removeFromFavorites={removeFromFavorites} key={item.id}/>
          ))}
        </GridContainer>
      </MainContainer>
      
      <ScrollPage/>
      <Footer />

    </div>
  )
}

export default App;
