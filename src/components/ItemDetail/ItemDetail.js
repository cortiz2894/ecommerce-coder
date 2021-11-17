import React,{ useState, useEffect }from "react"
import './ItemDetail.css'
//Material UI
import Select from '@mui/material/Select';
import { Grid, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
//Icons
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
//Components
import ItemCount from '../ItemCount/ItemCount'
//Context

function ItemDetail(props) {

const {name, price, img} = props.data;
const [items, setItems] = useState(0)
const [stock, setStock] = useState(3)

const [size, setSize] = useState('');



const handleChange = (event) => {
  setSize(event.target.value);
};

const onAdd = () => {
  items < stock && setItems(items + 1)
}

const onLess = () => {
  items !== 0 && setItems(items - 1)
} 


  return ( //JSX
    <Grid spacing={2} className={`detail-item`} container spacing={3}>
        <Grid item xs={12} md={7} className="image-detail-container"  >
          <Grid item md={4} className="container-multiple-img">
            <img src={`../../assets/products/${img}`} alt="Imagen Producto"/>
            <img src={`../../assets/products/${img}`} alt="Imagen Producto"/>
          </Grid>
          <Grid item md={8}>
            <img src={`../../assets/products/${img}`} alt="Imagen Producto"/>
          </Grid>
          
        </Grid>
        <Grid item xs={12} md={5} className="info-detail-container">
          <h2>{name}</h2>
          <p className='info-price'>$ {price}</p>
          <p className='payments-style info-installments'><span><CreditCardIcon />12 cuotas sin interes</span> de $ {price / 12} .</p>
          <p className='payments-style info-installments'><span><AttachMoneyIcon />10% de descuento</span> pagando por transferencia bancaria.</p>
          <FormControl fullWidth style={{marginTop: 15}}>
            <InputLabel>Talle</InputLabel>
            <Select
              labelId="select-size"
              value={size}
              label="Talle"
              onChange={handleChange}
            >
              <MenuItem value={'S'}>S</MenuItem>
              <MenuItem value={'M'}>M</MenuItem>
              <MenuItem value={'L'}>L</MenuItem>
              <MenuItem value={'XL'}>XL</MenuItem>
            </Select>
          </FormControl>
          <div className="info-details-container-button-count">
            <ItemCount onAdd={onAdd} onLess={onLess} quantity={items}/>
            <Button variant="contained" className="info-details-payment-button">Agregar al carrito</Button>
          </div>
        </Grid>
    </Grid>
  );
}

export default ItemDetail;