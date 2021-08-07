import React from 'react'
import './Contact.css'
import { Element } from 'react-scroll'
import { IconButton } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Contact() {
    return (
         <Element name='contact' className='contact1' id='contact'>
             <div className='con'>
             <h1>contact</h1>
             <div>
                 <p>
                     Email:<span>nithishnithin01@gmail.com</span>
                 </p>
                 <p>GIT HUB :<span>nithish_nithin</span></p>
                 <p>LINKDEIN:<span>nithish_nithin</span></p>
                 </div>
                 <div className='contact_icons'>
                     <IconButton>
                            <MailIcon/>
                            <InstagramIcon/>
                     < LinkedInIcon/>
                     </IconButton>
                      



                 </div>
             </div>
             

         </Element>
    )
}

export default Contact
