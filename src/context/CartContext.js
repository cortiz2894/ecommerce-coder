import React, { createContext,useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    //Custom Provider
    const [products , setProducts] = useState(JSON.parse(localStorage.getItem('cartProducts')) || [])
    const [showNotification, setShowNotification ] = useState(false)

    const addProduct = (product) => {
        const foundId = products.some(item => item.id === product.id);
        if(!foundId){
            setProducts([
                ...products,
                product
            ])
            addProductStorage(product)
        }else{
            setShowNotification(true)
        }
    }

    const handleNotification = () => {
        setShowNotification(false)
    }

    const addProductStorage = (producto) => {        
        localStorage.setItem("cartProducts", JSON.stringify([...products, producto]))
    }


    const data = {
        products,
        addProduct,
        showNotification,
        handleNotification
    }
    
    return(
        <CartContext.Provider  value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;