import React from 'react';
import '../components/cardpic.css';
import pic5 from '../assets/pic5.png';
import pic6 from '../assets/pic6.png';

const Cardpic1 = () => {
    return (  
        <div className='card-container-midd1'>
           <img className='pic-card1-mid' src={pic5} alt="pic"></img>
           <div className='name-card-1-mide-container'>
                 <img className='small-profile-card1' src={pic6} alt="pic"></img>
                 <h1 className='name-cardd-sec1-mid'>Islam Ali</h1>
           </div>
        </div>
    );
}
 
export default Cardpic1;