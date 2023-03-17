import React from 'react'
import './topbar.scss'

import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function Topbar( {menuOpen, setMenuOpen} ) {

  return (
    //concatnating 'topbar active' when hamburger is clicked it'll have set opposite state
    <div className={'topbar ' + (menuOpen && 'active')} > 
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className='logo'>jesthine.</a>
                <div className="itemContainer">
                    <PersonIcon className='icon'/>
                    <span>201 589 0721</span>
                </div>
                <div className="itemContainer">
                    <MailIcon className='icon'/>
                    <span>jesthinedisla@gmail.com</span>
                </div>
                <div className="itemContainer">
                    <ContactMailIcon className='icon'/>
                    <span><a style={{textDecoration:"none"}}href="#contact">Contact</a></span>
                </div>
                
            </div>
            <div className="right">
                <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>
        </div>
    </div>
  )
}
