import React,{useState, useEffect} from 'react'
import Product from '../Product/Product'

export default function ListProducts() {
    const [mostrar, setMostrar] = useState(true)

    useEffect(() => {
        console.log("Fase de montado")
    },[])

    return(
        <div>
            <h2>Hook de Efecto</h2>      
            <button onClick={() => setMostrar(!mostrar)}>Mostrar</button>      
            {mostrar ? <BloqueColor /> : null }
        </div>
    )
}

function BloqueColor() {
    const [color, setColor] = useState('red')

    useEffect(() => {
        console.log("Montado")
        function onMouseMouse(e) {
            console.log(e.clientY)
            // if(e.clientY > window.innerWidth / 2 ) {
            //     setColor('red')
            // }else{
            //     setColor('green')
            // }
        }
        window.addEventListener("mousemove", onMouseMouse);
        return () => {
            console.log("Fase desmonaje")
            window.removeEventListener("mousemove", onMouseMouse);
        }
    },[])

    return (
        
        <div style={{background: color, height: '100vh'}}>
            {console.log("render")}
        </div>
    )
}