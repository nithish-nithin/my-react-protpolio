import React from 'react'

import {Link}from 'react-scroll'
import './Topcontent.css'
function Topcontent() {
    return (
        <div className='topcontent'>
            <div className='topcontent__container'>
             <h1>MR.<span className='sp'>R Nithish</span></h1>
             <p className='para'>let me introduce my self, its me nithish iam freelance website designer  <br></br> from chennai create professional websites i love art and always try <br></br> to unique views to the audience through my design</p>
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
