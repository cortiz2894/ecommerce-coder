import { Button } from '@mui/material'
import React, {useState, useContext}from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartWidget from '../CartWidget/CartWidget';
import CartContext from '../../context/CartContext'

export default function Cart(){
    const { products } = useContext(CartContext)

    const [showCart, setShowCart] = useState(false)

    const handleCart = () => {
        !showCart ? setShowCart(true) : setShowCart(false)
    }

    return (
        <div className="cart-buttonNav">
            <Button variant="outlined" onClick={handleCart}>
            <ShoppingCartIcon />
            </Button>
            <CartWidget show={showCart} close={handleCart}/>
      </div>
    )
} 