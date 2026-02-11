import React from 'react';

import './header.css'
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png'

const Headerr = () => {
    return ( 
        <>
        
        <header  >
       
        <figure className='figure-icon'>
            <img src={pic2} alt="header"></img>

        </figure>
        </header>
            
        </>
     );
}
 
export default Headerr;