import React, {useState, useContext} from 'react'
import './Product.css'
import Button from '@material-ui/core/Button';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const Product = (props) => {

    const { products, addProduct } = useContext(CartContext)

    const addToCart = () => {
        addProduct(props)
    }

    return(
        <div className="container-producto">
            <div className="contianer-img-producto">
                <img src={`./assets/products/${props.image}`} alt="imagen" />
            </div>
            <div className="container-product-data">
                <h3>{props.title}</h3>
                <p>$ {props.price}</p>
                <span><b>12</b> cuotas sin interes de <b>{props.price / 12}</b></span>
                <ItemCount />
                <div className='container-button-products'>
                    <Button onClick={addToCart}>Agregar al carrito</Button>
                    <Link to={`/producto/${props.id}`}><Button>Ver</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default Product