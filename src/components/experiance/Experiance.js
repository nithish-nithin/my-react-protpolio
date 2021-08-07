import React from 'react'
import './Experiance.css'
import { Element } from 'react-scroll'
import Ebox from '../Experiancebox/Ebox'

function Experiance({}) {
    return (
         <Element name='exp' className='excont' id='exid'>
             <h1>Experiance</h1>
             <div className='infoo'>
                 <Ebox number='+10' title='clients'/>
                 <Ebox number='+20' title='projects'/>
                 <Ebox number='+4' title='months practic'/>
                 <Ebox number='+50' title='blog'/>
             </div>
         </Element>
    )
}

export default Experiance
