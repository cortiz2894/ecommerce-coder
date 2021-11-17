import React, {useState, useEffect, useContext} from 'react'
import Product from '../Product/Product'
import './ListProducts.css'
import { Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material';

//firebase
import  db  from '../../firebase'
import { collection, getDocs ,doc, getDoc} from 'firebase/firestore';
//context
import CartContext from '../../context/CartContext'



export default function ListProducts() {

    const {showNotification, handleNotification} = useContext(CartContext)

    const [products, setProducts] = useState([])
    const [open, setOpen] = React.useState(showNotification);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

    async function getProducts(db) {
        const productsCol = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => {
            let product = doc.data()
            product.id = doc.id
            return product
        });
        //const productsID =  productsSnapshot.docs.map(doc => doc.id);
        return setProducts(productsList)
    }

    async function getProduct(db) {
        const docRef = doc(db, "products", "C0O8z7U3hS9YQCWYGjzV");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
        // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleNotification}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );


    useEffect(()=>{
        getProducts(db)
        getProduct(db)
    },[])

    return(
            <div className={`container-general`}>

                {products.length !== 0 ? (
                    products.map( (product)=> {
                        return (
                            <Product key={`item-${product.id}`} title={product.name} price={product.price} image={product.img} id={product.id}/>
                        )
                    })
                ) : (
                    <Box sx={{ display: 'flex' }} style={{height: 500, justifyContent: 'center', alignItems: 'center'}}>
                        <CircularProgress />
                    </Box>
                )}
                <Snackbar open={showNotification} autoHideDuration={6000} onClose={handleNotification} message="El producto ya fue agregado" action={action}/>
            </div>
    )
}