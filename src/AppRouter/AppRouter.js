import React,{useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//Components
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import NotFoundPage from '../pages/NotFoundPage'
import NavBar from '../components/NavBar/NavBar'
import ProductDetailPage from '../pages/ProductDetailPage'
import ListProducts from '../components/ListProducts/ListProducts'

//Context

import { CartProvider } from '../context/CartContext';


export default function AppRouter(){

    const [fixedScroll, setFixedScroll] = useState(false)

    useEffect(()=>{
  
      function onScrollWindow() {
        if(window.scrollY > 300){
          setFixedScroll(true)
        }else{
          setFixedScroll(false)
        }
      }
  
      window.addEventListener("scroll", onScrollWindow)
      
    }, [])

    return(
        <BrowserRouter>
          <CartProvider>
              <NavBar fixed={fixedScroll}/>
              <Switch>
                  <Route path="/contacto" component={ContactPage}/>
                  <Route path="/producto/:productId" component={ProductDetailPage} />
                  <Route path="/category/:categoryId" component={ListProducts} />
                  <Route exact path="/" component={HomePage}/>
                  <Route path="*" component={NotFoundPage} />
              </Switch>
          </CartProvider>
        </BrowserRouter>
    )
}

