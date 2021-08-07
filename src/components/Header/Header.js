import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'


export default function Header() {
    return (
        <div className='header'>
        <div className='header__left'> <h1>develop<span>er</span></h1></div>
         <div className='header__right'>
          <Link to='about'smooth={true} duration={500}>
              <h4>about me</h4>
          </Link>
          <Link to='skills' smooth={true} duration={500}><h4>skills</h4></Link>
           <Link to='exp' smooth={true} duration={500}><h4>experience</h4></Link>
          <Link to='contact' smooth={true} duration={500}><h4>contact</h4></Link>
          <h4 className='header__rightbutton'>join with me</h4>
         </div>
        </div>
        
    )
}
