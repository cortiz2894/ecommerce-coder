import logo from '../../assets/logo_coderhouse.png';
import React, {useState, useEffect, useContext} from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom'
//Material UI
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@mui/material/Switch';

//Context
// import ThemeContext from '../../context/themeContext';
import Cart from '../Cart/Cart';

const NavBar = (props) => {
  const [categories, setCategories] = useState([
    {
      name: 'Remera',
      id: '1'
    },
    {
      name: 'Jeans',
      id: '2'
    },
    {
      name: 'Calzado',
      id: '3'
    },
  ])
  const [anchorEl , setAnchorEl] = useState(null)

  // const {theme, handleTheme} = useContext(ThemeContext);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return ( //JSX
    
    <AppBar position={props.fixed ? 'fixed' : 'static'} className={`main-navbar ${props.fixed ? 'navbar-scroll' : ''} `}>
        <Toolbar>
          <div className="container-logo">
            <img  src={logo} alt={'logo principal'}/>
          </div>
          <div>
            <div className="container-search-form">
              <form autoComplete="off">
              
              <TextField
                className="search-input-icon"
                label="Buscar"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              </form>
            </div>
            <Cart />
          </div>
        </Toolbar>
        

        <nav className="bottom-navbar">
          <ul className="navbar-list">
            <li><Link to="/"><Button color="inherit">Inicio</Button></Link></li>
            <li>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {categories.map( (category, index) => {
                return <MenuItem key={index}><Link to={`/category/${category.id}`}> {category.name}</Link> </MenuItem>
              })}
              
            </Menu>
            <Button 
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit">Productos</Button>
            </li>
            <li><Button color="inherit">Preguntas Frecuentes</Button></li>
            <li><Link to="/contacto"><Button color="inherit">Contacto</Button></Link></li>
          </ul>
        </nav>
    </AppBar>
  );
}

export default NavBar;