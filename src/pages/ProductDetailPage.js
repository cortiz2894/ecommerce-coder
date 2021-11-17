import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

export default function ProductDetailPage(){
    const { productId } = useParams()
    console.log("parametros: ", useParams())
    return(
        <>
            <ItemDetailContainer />
        </>
    )
}