import React from 'react';
import '../components/buttonimg.css'
import pic4 from '../assets/pic4.png';

const Buttonimgg = () => {
    return (  
        <>
        <div className='main-button-left'>
            <img src={pic4} alt="pic"></img>
            <h2 className='text-button-left' >UI / UX Designers & Developers</h2>
        </div>
        </>
    );
}
 
export default Buttonimgg;