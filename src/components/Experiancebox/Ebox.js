import React from 'react'
import './Ebox.css'


function Ebox({number,title,style}) {
    return (
        <div style={{...style}} className='experiance'>
         <h1>{number}</h1>
         <p>{title}</p>
            
        </div>
    )
}

export default Ebox
