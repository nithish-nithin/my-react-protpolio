 import React from 'react'
 import './Topcontainer.css'
 import {Element} from 'react-scroll'
 import Topcontent from '../topcontent/Topcontent'


 
 function Topcontainer() {
     return (
          <div className='topcontainer'>
             <Element>
                 <Topcontent/>
             </Element>
          </div>
     )
 }
 
 export default Topcontainer;
 