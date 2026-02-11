import React from 'react';
import '../components/post.css'
import pic11 from '../assets/pic11.png';
import pic12 from '../assets/pic12.png';
import pic13 from '../assets/pic13.png';
import pic14 from '../assets/pic14.png';
const Postt = () => {
    return (  
        <div className='post-main-card'>
            <div className='part1-post'>
                <div className='profile-part-post'>
                     <img  src={pic11} alt="profile"></img>
                     <div className='name-box-post'>
                        <h1 className='person-name-post'>Albert Flores</h1>
                      <div className='time-box-post'>
                        <h2 className='time-post'>2 d</h2>
                        <div className='dot-time-post'></div>
                         <img  src={pic12} alt="world"></img>
                     </div>
                     </div>

                </div>

                 <img  src={pic13} alt="menu" className='menu-post'></img>
            </div>

              <img  src={pic14} alt="post"></img>
            
        </div>
    );
}
 
export default Postt;