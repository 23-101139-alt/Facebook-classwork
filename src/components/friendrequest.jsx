import React from 'react';
import '../components/friendrequest.css'
import pic15 from '../assets/pic15.png';
import Ctaa from '../components/button';

const Requsttcard = () => {
    return ( 
        <div className='friendrequestcardd'>
            <div className='part1-friendrequest'>
                <div className='main-profile-box-friendrequest'>
                    <img  src={pic15} alt="profile"></img>
                    <h2 className='name-friendrequest'>Guy Hawkins</h2>
                </div>
                <h2 className='clock-friendrequest'>4H</h2>
            </div>
            <nav className='ctaa-group-friendrequst'>
                <Ctaa />
                <button className='button2'>
                    Delete
                </button>
            </nav>
        </div>
     );
}
 
export default Requsttcard;