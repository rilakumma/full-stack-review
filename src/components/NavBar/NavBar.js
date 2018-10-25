import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar(){
    return(
        <div className='nav'>
            <div className='logo'>Logo</div>
            <div className='links'><Link to='/'>Home</Link></div>
            <div className='links'><Link to='/cool-couches'>Cool Couches</Link></div>
            <div className='links'><Link to='/profile'>Profile</Link></div>
        </div>
    )
}
