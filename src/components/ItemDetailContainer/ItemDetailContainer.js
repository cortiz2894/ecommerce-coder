import React,{useState, useEffect}from "react"
import { Grid } from '@mui/material';
import ItemDetail from '../ItemDetail/ItemDetail'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
//firebase
import  db  from '../../firebase'
import {doc, getDoc} from 'firebase/firestore';


function ItemDetailContainer() {
    const [infoProduct, setInfoProduct] = useState();
    const { productId } = useParams()

    async function getProduct(db) {
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setInfoProduct(docSnap.data())
      } else {
      // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }

  useEffect(()=>{
    getProduct(db)
  }, [])


  return ( //JSX
    <Grid className="detail-container" container={true}>
        {infoProduct ? (
          <ItemDetail data={infoProduct}/>
        ) : (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}
        
    </Grid>
  );
}

export default ItemDetailContainer;