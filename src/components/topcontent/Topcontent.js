import React from 'react'

import {Link}from 'react-scroll'
import './Topcontent.css'
function Topcontent() {
    return (
        <div className='topcontent'>
            <div className='topcontent__container'>
             <h1>MR.<span className='sp'>R Nithish</span></h1>
             <p className='para'>hey iam frontend developer based in chennai</p>
             <a href='www.google.com'>
                 <button className='download_btn'>download cv</button>

             </a>
             <Link to='projects' smooth={true} duration={500}>
                 <button className='work_btn'>my works</button>
             </Link>
            </div>
            
        </div>
    )
}

export default Topcontent
