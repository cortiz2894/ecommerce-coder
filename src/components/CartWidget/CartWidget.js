import { Button } from '@material-ui/core'
import React, {useContext, useEffect, useState} from 'react'
import './CartWidget.css'
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext'
//firebase
import  db  from '../../firebase'
import { collection, addDoc} from 'firebase/firestore';

export default function CartWidget({show, close}){

    const { products } = useContext(CartContext)
    const [productos, setProductos] = useState(products)

    useEffect(()=>{
        //console.log("products:", products)
        return products
    })
    
    const newOrder = {
        buyer: {
            name: 'Chris',
            email: 'cortiz@gmail.com',
            phone: 1221231231
        },
        items : products
    }

    const addOrder = () => {
        //Funcion para obtener el total de los precios
        let totalPrice = products.reduce(function(prev, current) {
            return prev + current.price
        }, 0);
        //Agregamos el total al objeto
        newOrder.total = totalPrice
        console.log("orden generada: ", newOrder )
        pushOrderFirebase(newOrder)
    }

    const pushOrderFirebase = async(newOrder) => {
        const orderFirebase = collection(db, 'orders');
        const order = await addDoc(orderFirebase, newOrder);
        console.log("Se genero la orden con el id: ", order.id)
    }

    return (
        <div className={`cart-widget ${show ? 'active' : ''}`}>
            <div className="cart-widget_title">
                <h4>Carrito de compras</h4>
                <Button onClick={close}>
                    <CloseIcon />
                </Button>
            </div>
            <div className="cart-widget_list">
            {products.map((product, index)=>{
                return(
                    <div className="cart-widget_product" key={`item-${product.id}`}>
                        <div className="container-img">
                            <img src={`./assets/products/${product.image}`} alt="" />
                        </div>
                        <div className="container-data">
                            <p className="container-data_title">{product.title}</p>
                            <p className="container-price">$ {product.price}</p>
                        </div>
                        <div className="container-actions">
                            <Button >
                                <DeleteIcon />
                            </Button>
                        </div>
                    </div>
                )
            })}
            {products.length === 0 && <div className="message-cart-empty">El carrito de compras está vacio</div>}
            <Button className='button-order' onClick={addOrder}>Generar orden</Button>
            </div>
            
        </div>
    )
} 