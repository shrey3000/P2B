import React from 'react'
import './navbar_style.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import peak2beach_header from '../images/Peak2Beach_header.png';

export default function Navbar() {

    const location = "Delhi";

  return (
    <navbar className="navbar" >
        {/* <h1 className='header-text' >Peak2Beach</h1> */}
        <img src={peak2beach_header} style={{height:'50px' , marginTop:'7px'}} alt='Peak2Beach'/>
         <div className='button'><a herf="#">Discover</a></div>
         <div className='button'><a herf="#">Trips   </a></div>
         <div className='button'><a herf="#">Review  </a></div>
         <div className='button'><a herf="#">More    </a></div>
         <div className='loc-button'><a herf="#"> <FaMapMarkerAlt /> | {location}</a></div>
         <div className='Sign-button'><a herf="#">SignIn</a></div>   
    </navbar>
  );
}
