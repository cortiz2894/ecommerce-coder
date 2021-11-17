import React,{useState} from 'react'
import {Button} from '@mui/material';
import './ItemCount.css'
export default function ItemCount(props) {

    return(
        <div className="container-item-count">
            <Button onClick={props.onLess} variant="outlined">-</Button>
            <p className="item-count">{props.quantity ? props.quantity : '0'}</p>
            <Button onClick={props.onAdd} variant="outlined">+</Button>
        </div>
    )
}