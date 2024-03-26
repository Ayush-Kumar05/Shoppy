import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';
export default function Header() {
 
    const[{basket},dispatch]=useStateValue();
  return (
   
    <nav className='headerr'>
       <Link to="/header">
        <img className='header__logo' src="https://api.logo.com/api/v2/images?logo=logo_40a48b8c-b57e-44c8-87c8-7020515f24af&u=1710182858&width=500&height=400&fit=contain&margins=100&format=webp&quality=60"  alt='Not Available' ></img>
        </Link>
        <div className='header__search'>
       <input className="headersearch__input" type="text"/>
       <SearchIcon className="searchIcon"/>
       </div>

       <div className='header__nav'>
        <Link to="/basket" className='header__link'>
          <div className='header__options'>
        <span className='option1'>Hello</span>
        <span className='option2'>Sign In</span>
        </div>
        </Link>
        
        <Link to="/" className='header__link'>
          <div className='header__options'>
        <span className='option1'>Returns</span>
        <span className='option2'>Orders</span>
        </div>
        </Link>

        <Link to="/login" className='header__link'>
          <div className='header__options'>
        <span className='option1'>Your</span>
        <span className='option2'>Prime</span>
        </div>
        </Link>

        
        <Link to="/header" className='header__link'>
          <div className='header__optionsbasket'>
        <ShoppingCartIcon/>
        
        <span className='option1basket basketcount'>{basket?.length}</span>
        
        </div>
        </Link>

       
       </div>
        </nav>
  )
}
