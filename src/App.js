//import logo from './assets/logo_coderhouse.png';
import React, {useEffect} from "react"
import './App.css';
//components
import AppRouter from "./AppRouter/AppRouter";
// import  db  from './firebase'
//import { getFirestore, collection, getDocs } from 'firebase/firestore';


function App() {

  return ( //JSX
    <div className="App">
        <AppRouter />
    </div>
  );
}

export default App;