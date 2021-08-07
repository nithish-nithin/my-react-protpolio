import React from 'react'
import './Skill.css'
import {Element} from 'react-scroll'
import Skilling from '../images/java-engineer.jpg'
import { LinearProgress } from '@material-ui/core/'

function Skill() {
    return (
         <Element name='skills' className='skill' id='skillcont'>
            <div className='skillimg'>
                 <img src={Skilling} alt ="noimage" width='500px'/>
            </div>
            <div className='skill_text'>
                 <h2>SKILLSET</h2>
                <div className='skillset'>
                     <h5> HTML</h5>
                </div>
                 <div className='skillc skillc1'>
                      <LinearProgress variant='determinate' value={90}></LinearProgress>
                 </div>
                 <div className='skillset'>
                     <h5>CSS</h5>
                </div>
                 <div className='skillc skillc2'>
                      <LinearProgress variant='determinate' value={90}></LinearProgress>
                 </div>
                 <div className='skillset'>
                     <h5>JAVA Script</h5>
                </div>
                 <div className='skillc skillc3'>
                      <LinearProgress variant='determinate' value={90}></LinearProgress>
                 </div>
            
            <div className='skillset'>
                     <h5>React</h5>
                </div>
                 <div className='skillc skillc4'>
                      <LinearProgress variant='determinate' value={65}></LinearProgress>
                 </div>

                 <div className='skillset'>
                     <h5>react native</h5>
                </div>
                 <div className='skillc skillc5'>
                      <LinearProgress variant='determinate' value={50}></LinearProgress>
                 </div>
                 </div>
                 
         </Element>   
    )
}

export default Skill
